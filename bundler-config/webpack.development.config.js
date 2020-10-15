/** Common config */
const { entry, resolve, output, configModule } = require('./common');

console.log(`
    ----------
    Mode: development
    ----------
`);

module.exports = () => ({
    mode: 'development',
    entry,
    resolve,
    output,
    devtool: 'source-map',
    module: configModule({
        cssLoader: {
            options: {
                localIdentName: 'components-selectapp-net__[name]__[local]____[hash:base64:5]',
            },
        },
    }),
});
