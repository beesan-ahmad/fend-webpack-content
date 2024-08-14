const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/client/index.js",
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.js$/,// we use regex to isolate the type of file that we are going to run this loader on.
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"// tell the webpack to create this file in the dist folder.
        })
    ]
}