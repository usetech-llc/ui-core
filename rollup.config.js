import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import i18next from 'rollup-plugin-i18next-conv';
import image from '@rollup/plugin-image';
import markdown from '@jackfranklin/rollup-plugin-markdown'
import typeScript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
// import NpmImport from 'less-plugin-npm-import';
import html from 'rollup-plugin-html';
import visualizer from 'rollup-plugin-visualizer';
// import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const input = 'packages/index.ts';

const external = [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  nodeResolve(),
  babel({
    exclude: 'node_modules/!**'
  }),
  del({ targets: ['dist/*'] }),
  html(),
  json(),
  postcss(),
  image(),
  i18next(),
  markdown(),
  typeScript({ tsconfig: 'tsconfig.json' }), // подключение typescript
  // sizeSnapshot(), // напишет в консоль размер бандла
  terser(), // минификатор совместимый с ES2015+, форк и наследник UglifyES
  commonJs(), // подключение модулей commonjs
  visualizer() // анализатор бандла
];

export default [
    {
        input,
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
        plugins,
        external
    },
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        plugins,
        external
    }
];
