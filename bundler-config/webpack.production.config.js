// const HtmlWebpackPlugin = require('html-webpack-plugin');

/** Common config */
const { entry, resolve, output, configModule, htmlTemplate } = require('./common');

console.log(`
    ----------
    Mode: production
    ----------
`);

module.exports = () => ({
    mode: 'production',
    entry,
    resolve,
    output,
    module: configModule,
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: htmlTemplate,
    //         // favicon: './src/assets/images/favicon.ico',
    //     }),
    // ],
    optimization: {
        minimize: true,
    },
});
