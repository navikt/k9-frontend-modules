const path = require("path");
module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    refs: {
        'react-components': {
            title: 'React',
            url: 'http://localhost:7001',
        },
        'web-components': {
            title: 'Web Components',
            url: 'http://localhost:7002',
        },
        'form-utils': {
            title: 'Form utils',
            url: 'http://localhost:7003',
        },
    },
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });

        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: [path.resolve(__dirname, '../src'), /node_modules\/nav-*/],
        });

        config.resolve.extensions.push('.less');

        return config;
    },
};
