import { describe, expect, it } from 'vitest';
import { deriveIncrement, parseUnreleasedSections } from '../derive-increment.mjs';

/** Builds a CHANGELOG.md whose [Unreleased] section holds `body` */
function changelog(body) {
  return `# Changelog\n\nAll notable changes.\n\n## [Unreleased]\n\n${body}\n\n## [1.0.0] - 2026-01-01\n\n### Added\n\n- initial release\n`;
}

describe('parseUnreleasedSections', () => {
  it('collects each heading with the number of non-blank lines under it', () => {
    const sections = parseUnreleasedSections(changelog('### Added\n\n- one\n- two\n\n### Fixed\n\n- three'));

    expect(sections).toEqual([
      { heading: 'Added', entries: 2 },
      { heading: 'Fixed', entries: 1 },
    ]);
  });

  it('drops headings that have nothing written under them', () => {
    expect(parseUnreleasedSections(changelog('### Added\n\n### Fixed\n\n- real entry'))).toEqual([{ heading: 'Fixed', entries: 1 }]);
  });

  it('throws when content sits before the first heading', () => {
    expect(() => parseUnreleasedSections(changelog('Breaking: dropped an overload\n\n### Fixed\n\n- typo'))).toThrow(
      /not under a `### <Section>` heading/,
    );
  });

  it('points at the offending CHANGELOG.md line so it can be found', () => {
    // `## [Unreleased]` is on line 5 of the fixture, so its body starts on 6 and the prose is on 7
    expect(() => parseUnreleasedSections(changelog('Breaking: dropped an overload\n\n### Fixed\n\n- typo'))).toThrow(
      /CHANGELOG\.md:7: "Breaking: dropped an overload"/,
    );
  });

  it('does not throw on an empty [Unreleased]', () => {
    expect(parseUnreleasedSections(changelog(''))).toEqual([]);
  });
});

describe('deriveIncrement', () => {
  it.each([
    ['### Breaking Changes\n\n- removed an API', 'major'],
    ['### Added\n\n- a feature', 'minor'],
    ['### Deprecated\n\n- an old API', 'minor'],
    ['### Fixed\n\n- a bug', 'patch'],
    ['### Changed\n\n- some internals', 'patch'],
  ])('derives %s -> %s', (body, expected) => {
    expect(deriveIncrement(changelog(body)).increment).toBe(expected);
  });

  it('takes the highest increment when several sections are present', () => {
    expect(deriveIncrement(changelog('### Fixed\n\n- a bug\n\n### Breaking Changes\n\n- removed an API')).increment).toBe('major');
  });

  it('rejects an unrecognized heading rather than guessing', () => {
    expect(() => deriveIncrement(changelog('### Housekeeping\n\n- tidied up'))).toThrow(/Unrecognized changelog section/);
  });

  it('reports an empty [Unreleased] as nothing to release', () => {
    expect(() => deriveIncrement(changelog(''))).toThrow(/is empty - there is nothing to release/);
  });

  it('reports headings that are all empty', () => {
    expect(() => deriveIncrement(changelog('### Added\n\n### Fixed'))).toThrow(/Every `### <Section>` heading in \[Unreleased\] is empty/);
  });

  it('surfaces unsectioned content instead of silently deriving a lower bump', () => {
    // The bug this guards: without the check this returns `patch`, dropping the breaking change
    expect(() => deriveIncrement(changelog('Breaking: dropped an overload\n\n### Fixed\n\n- typo'))).toThrow(
      /not under a `### <Section>` heading/,
    );
  });
});
