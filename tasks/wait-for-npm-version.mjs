/**
 * Wait until a version of this package is installable from the npm registry.
 * A freshly published version is not immediately available, so the release
 * process (.release-it.json after:release hook) polls before installing it in docs.
 *
 * Usage: node tasks/wait-for-npm-version.mjs <version> [timeoutSeconds]
 */
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const version = process.argv[2];
const timeoutSeconds = Number(process.argv[3] ?? 600);
const pollIntervalSeconds = 15;

if (!version) {
  console.error('Usage: node tasks/wait-for-npm-version.mjs <version> [timeoutSeconds]');
  process.exit(1);
}

if (!Number.isFinite(timeoutSeconds) || timeoutSeconds <= 0) {
  console.error(`Invalid timeoutSeconds: ${process.argv[3]}`);
  process.exit(1);
}

const registryUrl = `https://registry.npmjs.org/${pkg.name.replaceAll('/', '%2F')}`;
const deadline = Date.now() + timeoutSeconds * 1000;

const sleep = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

async function isVersionAvailable() {
  try {
    const response = await fetch(registryUrl, {
      // Abbreviated metadata - same document npm install resolves against
      headers: { accept: 'application/vnd.npm.install-v1+json' },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      console.warn(`Registry responded with HTTP ${response.status}`);
      return false;
    }
    const data = await response.json();
    return Boolean(data.versions?.[version]);
  } catch (err) {
    console.warn(`Registry request failed: ${err?.message ?? err}`);
    return false;
  }
}

console.log(`Waiting up to ${timeoutSeconds}s for ${pkg.name}@${version} to be available on npm...`);

while (!(await isVersionAvailable())) {
  if (Date.now() >= deadline) {
    console.error(`Timed out after ${timeoutSeconds}s waiting for ${pkg.name}@${version}.`);
    process.exit(1);
  }
  console.log(`${pkg.name}@${version} not yet available, retrying in ${pollIntervalSeconds}s...`);
  await sleep(pollIntervalSeconds);
}

console.log(`${pkg.name}@${version} is available.`);
