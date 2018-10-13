import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: false,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({}), minify({ comments: false, sourceMap: false })],
  },
];
