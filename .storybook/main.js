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
};
