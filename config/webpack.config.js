const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const path = require( "path" );

const config = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Production',
        } ),
    ],
    output: {
        filename: 'index.bundle.js',
        path: path.resolve( __dirname, '../dist' ),
        clean: true,
    },
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
                        presets: [ '@babel/preset-env' ]
                    }
                } ], // Webpack process loaders from the end to the start
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx' ], // Allow importing without specifying extensions
    },
};

module.exports = config;