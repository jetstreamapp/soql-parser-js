#!/usr/bin/env node
/**
 * Derives the semver increment for the next release from the `## [Unreleased]` section of
 * CHANGELOG.md, so the version follows the changes that were written down rather than
 * whoever starts the release picking a bump by hand.
 *
 * This file is shared verbatim with jetstreamapp/sf-formula-parser - keep the two copies in
 * sync when changing the rules.
 *
 * The vocabulary is Keep a Changelog's, plus `Breaking Changes` for majors:
 *
 *   major   ### Breaking Changes
 *   minor   ### Added, ### Deprecated
 *   patch   ### Fixed, ### Security, ### Changed, ### Removed
 *
 * Two deliberate choices:
 *
 * - Only headings are read. Scanning the body for a word like "BREAKING" looks convenient but
 *   fires on ordinary prose - an entry that merely mentions a breaking change, or describes
 *   this rule, would silently turn a patch into a major.
 * - An unrecognized heading is an error, not a guess. Guessing risks publishing a breaking
 *   change as a patch. Add the heading below, or pass the bump explicitly to `npm run release`.
 *
 * Usage:
 *   node scripts/derive-increment.mjs             prints `major`, `minor` or `patch`
 *   node scripts/derive-increment.mjs --explain   prints the reasoning as well
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Matched against the heading lowercased and stripped of emoji and punctuation */
const SECTION_INCREMENTS = [
  [/^breaking changes?$/, 'major'],
  [/^(added|deprecated)$/, 'minor'],
  [/^(fixed|security|changed|removed)$/, 'patch'],
];

const RANK = { patch: 0, minor: 1, major: 2 };

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Strips emoji, punctuation and casing so `💥Breaking changes💥` matches `breaking changes` */
function normalizeHeading(heading) {
  return heading
    .replace(/[^a-z]+/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function incrementForSection(heading) {
  const normalized = normalizeHeading(heading);
  for (const [pattern, increment] of SECTION_INCREMENTS) {
    if (pattern.test(normalized)) {
      return increment;
    }
  }
  throw new Error(
    `Unrecognized changelog section "### ${heading}" in [Unreleased].\n` +
      `  Use one of: Breaking Changes, Added, Deprecated, Changed, Removed, Fixed, Security.\n` +
      `  Internal or tooling-only entries belong under Changed.`,
  );
}

/** Returns the body of the `## [Unreleased]` section, without its heading line */
export function readUnreleasedSection(changelog) {
  const start = changelog.search(/^## \[Unreleased\]/m);
  if (start === -1) {
    throw new Error('CHANGELOG.md has no `## [Unreleased]` section.');
  }
  const rest = changelog.slice(start);
  const end = rest.indexOf('\n## ', 1);
  const section = end === -1 ? rest : rest.slice(0, end);
  return section.slice(section.indexOf('\n') + 1);
}

/**
 * Returns the `### ` sections of [Unreleased] that contain anything.
 *
 * Any non-blank line counts, not only list items - sections have been written as prose and as
 * tables, and skipping those could drop a `Breaking Changes` heading and turn a major into a
 * minor.
 */
export function parseUnreleasedSections(changelog) {
  const sections = [];
  let current = null;

  for (const line of readUnreleasedSection(changelog).split('\n')) {
    const heading = line.match(/^###\s+(.*\S)\s*$/);
    if (heading) {
      if (current) {
        sections.push(current);
      }
      current = { heading: heading[1], entries: 0 };
    } else if (current && line.trim() !== '') {
      current.entries += 1;
    }
  }
  if (current) {
    sections.push(current);
  }

  return sections.filter(section => section.entries > 0);
}

export function deriveIncrement(changelog) {
  const unreleased = readUnreleasedSection(changelog);
  const sections = parseUnreleasedSections(changelog);

  if (sections.length === 0) {
    throw new Error(
      unreleased.trim() === ''
        ? 'The [Unreleased] section of CHANGELOG.md is empty - there is nothing to release.'
        : 'The [Unreleased] section has content but no `### <Section>` heading, so the bump cannot be derived.\n' +
            '  Put the entries under one of: Breaking Changes, Added, Deprecated, Changed, Removed, Fixed, Security.',
    );
  }

  const resolved = sections.map(section => ({
    heading: section.heading,
    entries: section.entries,
    increment: incrementForSection(section.heading),
  }));
  const increment = resolved.reduce((highest, section) => (RANK[section.increment] > RANK[highest] ? section.increment : highest), 'patch');

  return { increment, sections: resolved };
}

export function nextVersion(version, increment) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    throw new Error(`package.json version "${version}" is not a plain x.y.z version - pass an explicit version instead.`);
  }
  const [major, minor, patch] = match.slice(1).map(Number);
  if (increment === 'major') {
    return `${major + 1}.0.0`;
  }
  if (increment === 'minor') {
    return `${major}.${minor + 1}.0`;
  }
  return `${major}.${minor}.${patch + 1}`;
}

export function readChangelog() {
  return readFileSync(join(rootDir, 'CHANGELOG.md'), 'utf8');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const { increment, sections } = deriveIncrement(readChangelog());
    if (process.argv.includes('--explain')) {
      for (const section of sections) {
        console.log(`  ${section.heading} -> ${section.increment} (${section.entries} ${section.entries === 1 ? 'line' : 'lines'})`);
      }
      console.log(`  => ${increment}`);
    } else {
      console.log(increment);
    }
  } catch (error) {
    console.error(`\n  ${error.message}\n`);
    process.exit(1);
  }
}
