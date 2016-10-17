const webpack = require('webpack');
const config = require('./webpack.config');

config.devtool = 'cheap-module-source-map';
config.plugins = config.plugins.concat([
    // new webpack.optimize.DedupePlugin(), // https://github.com/webpack/webpack/issues/1082
    // new webpack.optimize.UglifyJsPlugin(), // includes in webpack -p
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
]);
config.module.loaders = config.module.loaders.concat([
    { test: /\.(sass|scss)/, loader: 'style!css!resolve-url!sass?sourceMap' },
]);

module.exports = config;
