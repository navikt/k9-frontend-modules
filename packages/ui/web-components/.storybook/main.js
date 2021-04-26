module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules.forEach((rule, ruleIndex) => {
            config.module.rules[ruleIndex].exclude = /node_modules/;
        });
        return config;
    },
};
