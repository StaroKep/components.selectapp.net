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
    module: configModule,
    optimization: {
        minimize: true,
    },
});