import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        typescript(),
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        image(),
        postcss({
            extensions: [ '.css' ],
        }),
        json()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};