const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// const webpack = require( 'webpack' );

module.exports = {
    entry: path.resolve( __dirname, '../src/index.js' ),
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, './../dist' ),
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?|.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env', '@babel/preset-react' ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, '../templates/index.html' ),
        } ),
        // new HtmlWebpackPlugin( {
        //     template: './public/index.html',
        // } ),
        // new webpack.EnvironmentPlugin( {
        //     NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        //     MAIN_API: "MNAPI",
        // } ),
        // new webpack.ProvidePlugin( {
        //     process: 'process/browser',
        // } ),
    ],
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias: {
            '@app': path.resolve( __dirname, '../src/' ),
            '@components': path.resolve( __dirname, '../src/components/' ),
        },
    },
};
