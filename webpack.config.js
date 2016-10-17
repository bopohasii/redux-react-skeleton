const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './develop/app.js',
    ],
    output: {
        path: path.join(__dirname, '/public/static/build/'),
        filename: 'main.js',
        publicPath: '/static/build/',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },

            { test: /\.gif$/, loader: 'url?limit=16000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url?limit=100000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url?limit=50000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url?limit=50000&mimetype=image/svg+xml' },

            // {
            //     test: /.*\.(gif|png|jpe?g|svg)$/i,
            //     loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack'],
            // },


            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url?limit=500000' },

            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },

            { test: /\.json$/, loader: 'json' },
        ],
    },
    // npm image-webpack-loader
    // imageWebpackLoader: {
    //     pngquant: {
    //         quality: '65-90',
    //         speed: 4,
    //     },
    //     svgo: {
    //         plugins: [
    //             { removeViewBox: false },
    //             { removeEmptyAttrs: false },
    //         ],
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'develop/index.html',
            inject: 'body',
            hash: true,
        }),
    ],
};

