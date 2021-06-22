// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import markdown from '@jackfranklin/rollup-plugin-markdown';
import babel from '@rollup/plugin-babel';
import commonJs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
// import NpmImport from 'less-plugin-npm-import';
import html from 'rollup-plugin-html';
import i18next from 'rollup-plugin-i18next-conv';
import postcss from 'rollup-plugin-postcss';
// import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import typeScript from 'rollup-plugin-typescript2';

// import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

const input = 'packages/index.ts';

const external = [
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.resolutions || {}),
  ...Object.keys(pkg.dependencies || {})
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
  commonJs() // подключение модулей commonjs
];

export default [
  {
    external,
    input,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    plugins
  },
  {
    external,
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'uiCore',
      sourcemap: true
    },
    plugins
  }
];
