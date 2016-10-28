const config = require('./webpack.config');

config.output.filename = 'main.[hash].js';
config.plugins = config.plugins.concat([
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: JSON.stringify('production'),
    //     },
    // }),
    // new webpack.optimize.DedupePlugin(), // https://github.com/webpack/webpack/issues/1082
    // new webpack.optimize.UglifyJsPlugin(), // includes in webpack -p
]);
config.module.loaders = config.module.loaders.concat([
    { test: /\.(sass|scss)/, loader: 'style!css!resolve-url!sass?sourceMap' },
]);

module.exports = config;
