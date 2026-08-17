#!/usr/bin/env node
/**
 * Kicks off a release from your terminal.
 *
 * Derives the next version from the `## [Unreleased]` section of CHANGELOG.md, shows you the
 * plan, then dispatches the release workflow on GitHub Actions and tails it. The release
 * itself still runs on CI, which is where the npm publish credentials and provenance (OIDC)
 * live - this only replaces clicking "Run workflow" in the GitHub UI.
 *
 * This file is shared verbatim with jetstreamapp/sf-formula-parser - keep the two copies in
 * sync when changing it.
 *
 * Usage:
 *   npm run release                derive the version from the changelog
 *   npm run release -- minor       force a bump level (major | minor | patch)
 *   npm run release -- 3.0.0       force an explicit version
 *   npm run release -- --dry-run   show the plan, dispatch nothing
 *   npm run release -- --yes       skip the confirmation prompt
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { deriveIncrement, nextVersion, readChangelog, readUnreleasedSection } from './derive-increment.mjs';

const RELEASE_BRANCH = process.env.RELEASE_BRANCH ?? 'main';
const WORKFLOW = 'release.yml';
const BUMPS = new Set(['major', 'minor', 'patch']);
const VERSION_PATTERN = /^\d+\.\d+\.\d+$/;
const RUN_POLL_ATTEMPTS = 20;
const RUN_POLL_INTERVAL = 1500;

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');

function run(command, args, options = {}) {
  return execFileSync(command, args, { cwd: rootDir, encoding: 'utf8', ...options })?.trim();
}

function fail(message) {
  console.error(`\n  ${message}\n`);
  process.exit(1);
}

function assertReleasable() {
  try {
    run('gh', ['auth', 'status'], { stdio: 'pipe' });
  } catch {
    fail('The GitHub CLI is not available or not signed in. Install it from https://cli.github.com, then run `gh auth login`.');
  }

  const branch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
  if (branch !== RELEASE_BRANCH) {
    fail(`Releases run from "${RELEASE_BRANCH}", but you are on "${branch}".`);
  }

  if (run('git', ['status', '--porcelain'])) {
    fail('The working tree has uncommitted changes. CI releases the pushed branch, not your tree, so commit or stash them first.');
  }

  run('git', ['fetch', 'origin', RELEASE_BRANCH, '--quiet']);
  const local = run('git', ['rev-parse', 'HEAD']);
  const remote = run('git', ['rev-parse', `origin/${RELEASE_BRANCH}`]);
  if (local !== remote) {
    fail(
      `Local ${RELEASE_BRANCH} (${local.slice(0, 7)}) does not match origin/${RELEASE_BRANCH} (${remote.slice(0, 7)}). Push or pull first.`,
    );
  }
}

/** The most recent run id for the workflow, or null when it has never run */
function latestRunId() {
  const runs = JSON.parse(run('gh', ['run', 'list', '--workflow', WORKFLOW, '--limit', '1', '--json', 'databaseId']));
  return runs[0]?.databaseId ?? null;
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const skipConfirmation = args.includes('--yes') || args.includes('-y');
const override = args.find(arg => !arg.startsWith('-'));
const unrecognized = args.filter(arg => arg.startsWith('-') && !['--dry-run', '--yes', '-y'].includes(arg));
if (unrecognized.length > 0) {
  fail(`Unrecognized option: ${unrecognized.join(', ')}\n  Usage: npm run release [-- major|minor|patch|x.y.z] [--dry-run] [--yes]`);
}

const { version: current } = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));
const changelog = readChangelog();

let version;
let reason;
try {
  if (override && VERSION_PATTERN.test(override)) {
    version = override;
    reason = 'explicitly requested';
  } else if (override) {
    if (!BUMPS.has(override)) {
      fail(`"${override}" is not major, minor, patch, or an x.y.z version.`);
    }
    version = nextVersion(current, override);
    reason = `${override} bump explicitly requested`;
  } else {
    const derived = deriveIncrement(changelog);
    version = nextVersion(current, derived.increment);
    reason = `${derived.increment} derived from ${derived.sections.map(section => `### ${section.heading}`).join(', ')}`;
  }
} catch (error) {
  fail(error.message);
}

console.log(`\n  ${current} -> ${version}\n  ${reason}\n`);
console.log(`  Changelog entries for this release:\n${readUnreleasedSection(changelog).trim().replace(/^/gm, '    ')}\n`);

if (dryRun) {
  console.log('  --dry-run: nothing dispatched.\n');
  process.exit(0);
}

assertReleasable();

if (!skipConfirmation) {
  if (!process.stdin.isTTY) {
    fail('Not a TTY - re-run with --yes to dispatch without confirmation.');
  }
  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question(`  Release v${version} from ${RELEASE_BRANCH}? [y/N] `);
  prompt.close();
  if (!/^y(es)?$/i.test(answer.trim())) {
    console.log('\n  Aborted.\n');
    process.exit(0);
  }
}

const before = latestRunId();
run('gh', ['workflow', 'run', WORKFLOW, '--ref', RELEASE_BRANCH, '-f', `version=${version}`]);
console.log('\n  Dispatched. Waiting for the run to appear...');

let runId = null;
for (let attempt = 0; attempt < RUN_POLL_ATTEMPTS && runId === null; attempt++) {
  await new Promise(resolve => setTimeout(resolve, RUN_POLL_INTERVAL));
  const latest = latestRunId();
  if (latest !== null && latest !== before) {
    runId = latest;
  }
}

if (runId === null) {
  console.log(`  Could not find the new run. Check it with: gh run list --workflow ${WORKFLOW}\n`);
  process.exit(0);
}

console.log(`  Watching run ${runId} (Ctrl-C stops watching; the release keeps running)\n`);
run('gh', ['run', 'watch', String(runId), '--exit-status'], { stdio: 'inherit' });
