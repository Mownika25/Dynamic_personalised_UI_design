var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    merge = require('webpack-merge'),
    common = require('./webpack.config'),
    path = require('path'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var sass = new ExtractTextPlugin({
    filename: "app.css",
    allChunks: true
});

var specific = {
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: sass.extract(['css-loader', 'sass-loader'])
        }, {
            test: /\.css$/,
            loaders: sass.extract(['css-loader'])
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        sass,
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../assets'),
            to: path.join(__dirname, '../dist/assets'),
        }, {
            from: path.resolve(__dirname, './netlify.redirects'),
            to: '_redirects',
            toType: 'file'
        }]),
        //new BundleAnalyzerPlugin()
    ],

    output: {
        publicPath: '/',
        filename: "[name].[chunkhash].js",
        chunkFilename: '[name].[chunkhash].js',
        hashDigestLength: 5
    }
};

module.exports = merge(common, specific);
