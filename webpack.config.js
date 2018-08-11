var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.join(__dirname, "src");

module.exports = {
    context:  SRC_DIR,
    entry: {
        'app': ['whatwg-fetch', './lib/fetch.js', './app.jsx'],
    },
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015-without-strict', 'react'],
                        plugins: ["transform-object-rest-spread"],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {minimize: true}}
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {minimize: true}},
                    {loader: 'less-loader'}
                ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg|.gif)$/, loader: 'url-loader?limit=100000' },
            { test: /favicon\.ico$/, loader: 'url-loader', query: { limit: 1, name: '[name].[ext]' } },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify("development"),
            },
        })
    ],
    resolve: {
        extensions: [".js",".jsx"]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
};