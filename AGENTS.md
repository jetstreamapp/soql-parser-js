# AGENTS.md

## Misc

Use conventional commit style messages.

## Formatting

**ALWAYS run `npm run format` after making any change.** This is not optional and applies to every
file you touch — source, tests, docs, config, JSON, CSS, YAML and Markdown alike.

oxfmt is the formatter; its settings live in `.oxfmtrc.json`. It reads `.gitignore`, so build output
is skipped automatically.

- `npm run format` — format the repo in place
- `npm run format:check` — verify without writing

To protect a block from the formatter use `// prettier-ignore` (or `<!-- prettier-ignore -->` in
markdown) — oxfmt honors prettier's ignore comments in every file type it formats, while
`oxfmt-ignore` only works in JS and TS.

## Linting

**ALWAYS run `npm run lint` after making any change** and fix what it reports.

oxlint is the linter; its settings live in `.oxlintrc.json`. It lints `src/`, `test/`, `scripts/`
and `cli/` — `dist/`, `tmp/` and `docs/` are excluded via `ignorePatterns`.

- `npm run lint` — report violations
- `npm run lint:fix` — apply the fixes oxlint can make automatically

The `correctness`, `suspicious` and `perf` categories are errors. `style` and `pedantic` are
deliberately off: oxfmt already owns layout, and the remainder is opinion rather than defect
detection.

Prefer fixing the code over silencing the rule. When a rule genuinely misfires, add it to a scoped
entry in `overrides` (by file glob) rather than disabling it repo-wide, and record why inline.

## Commit hook

A `pre-commit` hook in `.githooks/` runs both the format check and oxlint against staged files and
**blocks the commit** if either fails, so skipping those steps will stop the commit rather than slip
through. The hook is wired up by the `prepare` script (`git config core.hooksPath .githooks`) on
`npm install`. Emergency bypass: `git commit --no-verify`.

## Types

`tsconfig.json` sets `isolatedDeclarations`, so **every exported symbol needs an explicit type
annotation** — an exported function with an inferred return type will fail `npm run build`.

`npm run typecheck` checks the whole tree including tests and scripts (`tsconfig.typecheck.json`);
`npm run build` only emits declarations for the published `src/`.

The root package is CommonJS, which is why the vitest config is `vitest.config.mts`. **Do not add
`"type": "module"` to package.json** — it would make the published `dist/cjs` build load as ESM and
break every CommonJS consumer.

## Testing

We maintain very high test coverage, add tests for any changes.

## Documentation

Make sure all changes are represented in the documentation as appropriate.

The `docs/` directory contains a Docusaurus site — a separate npm project with its own
package.json and node_modules, so run its npm commands from inside `docs/`.

## Releasing

Releases are cut from `main` by CI, kicked off from your terminal:

```sh
npm run release              # derive the version from CHANGELOG.md
npm run release -- --dry-run # show the plan, dispatch nothing
npm run release -- minor     # force a bump level (major | minor | patch)
npm run release -- 3.0.0     # force an explicit version
```

The bump is derived from the `[Unreleased]` section of `CHANGELOG.md` by
`scripts/derive-increment.mjs`, reading **section headings only** — never the entry text, so an
entry that merely mentions a breaking change cannot turn a patch into a major:

| `[Unreleased]` contains                                   | Bump  |
| --------------------------------------------------------- | ----- |
| `### Breaking Changes`                                    | major |
| `### Added` or `### Deprecated`                           | minor |
| `### Changed`, `### Removed`, `### Fixed`, `### Security` | patch |

**So keep `[Unreleased]` accurate — it decides the version.** Those seven headings are the whole
vocabulary; anything else is an error rather than a guess, because guessing risks publishing a
breaking change as a patch. Internal or tooling-only entries go under `### Changed`. An empty
`[Unreleased]` aborts the release. `npm run release:increment` shows the reasoning without
releasing.

The `Changelog` workflow enforces this on every pull request that touches published code: it fails
if `CHANGELOG.md` was not updated, and then fails again if `[Unreleased]` does not classify to a
bump — so a touched-but-empty section is caught too. Label a pull request `skip-changelog` to opt
out when a change genuinely needs no entry.

The script refuses to run unless you are on `main`, the working tree is clean, and your branch
matches `origin/main`. It then dispatches the release workflow with the computed version and tails
the run. The bump, build and publish all happen on CI, so npm provenance (OIDC) is preserved —
running the release locally would lose it.

Release commits pass `--no-verify`: they are machine generated from already checked files, and a
hook failing mid-release would abort after the npm publish.

`scripts/derive-increment.mjs`, `scripts/release.mjs`, `.githooks/pre-commit` and the
`.github/workflows/ci.yml`, `release.yml` and `changelog.yml` workflows are shared verbatim
with [sf-formula-parser](https://github.com/jetstreamapp/sf-formula-parser) — keep the copies in
sync when changing them.
