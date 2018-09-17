const {MixerPlugin} = require("@mixer/cdk-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new MixerPlugin({ homepage: 'public/index.html' })
        ]
    },
    productionSourceMap: false,
    outputDir: 'build',
};