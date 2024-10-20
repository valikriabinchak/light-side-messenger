const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const path = require( "path" );

const config = {
    entry: path.resolve( __dirname, '../src/index.js' ),
    mode: "development",
    output: {
        path: path.resolve( __dirname, '../dist' ),
        filename: 'index.js',
    },
    plugins: [ new HtmlWebpackPlugin( {
        template: path.resolve( __dirname, '../templates/index.html' ), // Absolute path
        filename: 'index.html',
        title: 'My App',
    } ) ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/,
                use: [ {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', ]
                    }
                } ], // Webpack process loaders from the end to the start
            } ]
    },
    resolve: {
        extensions: [ '.js', '.jsx' ], // Allow importing without specifying extensions
    },
};

module.exports = config;