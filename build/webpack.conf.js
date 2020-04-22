const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), 'lib'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: 'antd',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                use: {loader: "babel-loader", options: {presets: ['@babel/preset-env']}}
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(),
        new VueLoaderPlugin()]
}