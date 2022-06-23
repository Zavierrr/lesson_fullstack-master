const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development', // 模式
    entry: './src/index.jsx', // 入口
    output: { // 输出
        filename: '[name].[contenthash:8].js', // 输出文件名
        path: path.join(__dirname, 'dist') // 输出文件路径
    },
    module: {
        rules: [
            // 什么后缀文件用什么loader
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 1314
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
    ]
}