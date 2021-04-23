import typescript from '@rollup/plugin-typescript';

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
        typescript({
            tsconfig: './tsconfig.json',
        }),
    ],
};
