const { merge } = require( 'webpack-merge' );
const baseConfig = require( './webpack.config' );

const config = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // You can add additional rules here for CSS, images, etc.
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx' ] // Resolve these extensions
    },
};

module.exports = merge( baseConfig, config );