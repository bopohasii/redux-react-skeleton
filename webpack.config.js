const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './develop/app.js',
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 3031,
        contentBase: './public',
    },
    output: {
        path: path.join(__dirname, '/public/static/build/'),
        filename: 'main.js',
        publicPath: 'static/build/',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(sass|scss)/, loader: 'style!css!resolve-url!sass?sourceMap' },

            { test: /\.gif$/, loader: 'url?limit=16000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url?limit=16000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url?limit=16000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url?limit=50000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url?limit=1' },

            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },

            { test: /\.json$/, loader: 'json' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'develop/index.html',
        }),
    ],
    eslint: {
        configFile: '.eslintrc',
    },
};
