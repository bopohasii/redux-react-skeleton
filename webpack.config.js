const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SpritePlugin = require('webpack-spritesmith');
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
            { test: /\.css$/, loader: 'style!css!autoprefixer?{browsers:["last 1 version", "ie >= 11"]}' },

            { test: /\.gif$/, loader: 'url?limit=16000&mimetype=image/gif&name=[name].[ext]?[hash]' },
            { test: /\.jpg$/, loader: 'url?limit=100000&mimetype=image/jpg&name=[name].[ext]?[hash]' },
            { test: /\.png$/, loader: 'url?limit=50000&mimetype=image/png&name=[name].[ext]?[hash]' },

            { test: /\.svg/, loader: 'url?limit=50000&mimetype=image/svg+xml&name=[name].[ext]?[hash]!svgo' },

            // {
            //     test: /.*\.(gif|png|jpe?g|svg)$/i,
            //     loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack'],
            // },


            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url?limit=500000&name=[name].[ext]?[hash]' },

            { test: /\.jsx$/, loader: 'react-hot!babel', exclude: /(node_modules|public)/ },
            { test: /\.js$/, loader: 'babel', exclude: /(node_modules|public)/ },

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
        }),
        // new SpritePlugin({
        //     src: {
        //         cwd: path.resolve(__dirname, 'develop/assets/svg'),
        //         glob: '*.svg',
        //     },
        //     target: {
        //         image: path.resolve(__dirname, 'develop/assets/svg-sprite/sprite.svg'),
        //         css: path.resolve(__dirname, 'develop/assets/svg-sprite/sprite.sass'),
        //     },
        // }),
    ],
};

