const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('./webpack.config');

config.debug = true;
config.devtool = 'cheap-module-eval-source-map';
config.devServer = {
    inline: true,
    host: '0.0.0.0',
    port: 3030,
    contentBase: './public',
    historyApiFallback: true,
};
config.eslint = {
    configFile: '.eslintrc',
};
config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        },
    }),
    new WebpackNotifierPlugin(),
]);
config.output.pathinfo = true;
config.module.loaders = config.module.loaders.concat([
    { test: /\.(sass|scss)/, loader: 'style!css?sourceMap!resolve-url!sass?sourceMap' },
]);

module.exports = config;
