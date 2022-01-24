const path = require('path');
const CORE_DIR = path.resolve(__dirname, '../../../../packages');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });
        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: [path.resolve(__dirname, '../src'), CORE_DIR],
        });

        config.resolve.extensions.push('.less');

        return config;
    },
};
