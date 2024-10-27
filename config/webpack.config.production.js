const { merge } = require( 'webpack-merge' );
const baseConfig = require( './webpack.config' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const config = {
    mode: 'production',
};

module.exports = merge( baseConfig, config );