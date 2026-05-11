import { build } from 'esbuild';
import { readFileSync, writeFileSync, rmSync, mkdirSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const repoUrl = (pkg.repository?.url ?? '').replace(/^git\+/, '').replace(/\.git$/, '');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${repoUrl}
 * @license ${pkg.license}
 */`;

const LWC_COMPONENT_NAME = 'soqlParserJs';
const LWC_STANDALONE_DIR = 'dist/lwc';
const LWC_STANDALONE_FILE = `${LWC_STANDALONE_DIR}/${LWC_COMPONENT_NAME}.js`;
const LWC_PACKAGE_DIR = 'dist/lwc-packaged';
const LWC_PACKAGE_BUNDLE_DIR = `${LWC_PACKAGE_DIR}/lwc/${LWC_COMPONENT_NAME}`;

const targets = {
  esm: {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/esm/index.mjs',
    format: 'esm',
  },
  lwc: {
    entryPoints: ['src/index.ts'],
    outfile: LWC_STANDALONE_FILE,
    format: 'esm',
    // LWC's compiler doesn't support certain ES2022 syntax
    target: 'es2020',
  },
  cjs: {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/cjs/index.js',
    format: 'cjs',
  },
  cli: {
    entryPoints: ['cli/index.ts'],
    outfile: 'dist/cli/index.js',
    format: 'cjs',
    platform: 'node',
  },
};

const requested = process.argv[2];
const names = requested ? [requested] : Object.keys(targets);

for (const name of names) {
  if (!targets[name]) {
    console.error(`Unknown build target: ${name}. Valid targets: ${Object.keys(targets).join(', ')}`);
    process.exit(1);
  }
}

await Promise.all(
  names.map(async name => {
    await build({
      bundle: true,
      target: 'es2022',
      banner: { js: banner },
      minify: true,
      ...targets[name],
    });
    if (name === 'lwc') {
      writeLwcPackage();
    }
  }),
);

function writeLwcPackage() {
  const apiVersion = pkg.salesforceApiVersion;
  if (!apiVersion) {
    throw new Error('Missing "salesforceApiVersion" in package.json — required for LWC package metadata.');
  }
  mkdirSync(LWC_PACKAGE_BUNDLE_DIR, { recursive: true });
  copyFileSync(LWC_STANDALONE_FILE, `${LWC_PACKAGE_BUNDLE_DIR}/${LWC_COMPONENT_NAME}.js`);

  const packageXml = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>${LWC_COMPONENT_NAME}</members>
        <name>LightningComponentBundle</name>
    </types>
    <version>${apiVersion}</version>
</Package>
`;
  const metaXml = `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>${apiVersion}</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
`;
  writeFileSync(`${LWC_PACKAGE_DIR}/package.xml`, packageXml);
  writeFileSync(`${LWC_PACKAGE_BUNDLE_DIR}/${LWC_COMPONENT_NAME}.js-meta.xml`, metaXml);
  writeLwcZip();
}

function writeLwcZip() {
  const zipName = `soql-parser-js-lwc-v${pkg.version}.zip`;
  const zipPath = `dist/${zipName}`;
  rmSync(zipPath, { force: true });
  execFileSync('zip', ['-r', `../${zipName}`, '.'], { cwd: LWC_PACKAGE_DIR, stdio: 'inherit' });
}
