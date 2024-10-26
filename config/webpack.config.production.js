const { merge } = require( 'webpack-merge' );
const baseConfig = require( './webpack.config' );

const config = {
    mode: "production",
    module: {
        rules: [ { test: /\.txt$/, use: 'raw-loader' } ],
    },
    plugins: [ new HtmlWebpackPlugin( { template: './src/index.html' } ) ],
};

module.exports = merge( baseConfig, config );