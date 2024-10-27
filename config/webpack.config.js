const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
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
    devServer: {
        static: path.join( __dirname, 'public' ),
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
        } ),
    ],
};
