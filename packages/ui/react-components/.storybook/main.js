const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
    typescript: { reactDocgen: false },
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });
        config.module.rules.push({
            test: /\.(le|c)ss$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: [path.resolve(__dirname, '../src'), /node_modules\/nav-*/, /node_modules\/@navikt/],
        });

        config.resolve.extensions.push('.less');

        return config;
    },
};
