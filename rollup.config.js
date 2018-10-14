import typescript from 'rollup-plugin-typescript2';
// import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';
import dotenv from 'dotenv';
dotenv.config();

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
];
