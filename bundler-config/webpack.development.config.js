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
    module: configModule,
});