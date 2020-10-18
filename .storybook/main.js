module.exports = {
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.pcss/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        injectType: 'styleTag',
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]____[hash:base64:5]',
                    },
                },
                { loader: 'postcss-loader' },
            ],
        });

        return config;
    },
};
