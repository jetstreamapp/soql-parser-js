import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import addShebang from './rollup-plugins/add-shebang';

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({})],
  },
  {
    input: 'lib/cli.ts',
    output: [
      {
        file: pkg.bin.soql,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({}), addShebang({ include: 'cli.js' })],
  },
];
