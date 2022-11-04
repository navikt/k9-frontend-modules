import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'index.ts',
    output: [
        {
            sourcemap: true,
            format: 'cjs',
            file: './dist/index.cjs.js',
        },
        { sourcemap: true, file: './dist/index.js' },
    ],
    plugins: [
        peerDepsExternal(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
    ],
};
