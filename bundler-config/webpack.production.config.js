/** Common config */
const { entry, resolve, output, configModule } = require('./common');

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
    module: configModule({
        cssLoader: {
            options: {
                localIdentName: 'CSN___[hash:base64]',
            },
        },
    }),
    optimization: {
        minimize: true,
    },
});
