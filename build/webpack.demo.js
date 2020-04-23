const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: './examples/index.js'
    },
    output: {
        path: path.resolve(process.cwd(), './examples/dist'),
        filename: "[name][hash:7].js"
    },
    devtool: 'source-map',
    devServer: {
        port: 8085,
        publicPath: '/'
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
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./examples/index.html"
        }),
        new VueLoaderPlugin()]
}