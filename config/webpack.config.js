const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
    },
    plugins: [ new HtmlWebpackPlugin({
        template: '../templates/index.html'
    })],
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', ]
                }
            }], // Webpack process loaders from the end to the start
        }]
    }
};

module.exports = config;