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
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]_[local]_[contenthash:base64:5]',
                        },
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modules: true,
                            localIdentName: '[name]_[local]_[contenthash:base64:5]',
                            modifyVars: {
                                nodeModulesPath: '~',
                                coreModulePath: '~',
                            },
                        },
                    },
                },
            ],
            include: [path.resolve(__dirname, '../src')],
        });
        config.module.rules.push({
            test: /\.(less|css)?$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modifyVars: {
                                nodeModulesPath: '~',
                                coreModulePath: '~',
                            },
                        },
                    },
                },
            ],
            include: [/node_modules\/nav-*/, /node_modules\/@navikt/],
        });

        config.resolve.extensions.push('.less');
        config.devtool = 'eval-cheap-module-source-map';

        return config;
    },
};
