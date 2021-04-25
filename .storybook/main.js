module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
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
    },
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });
        return config;
    },
};
