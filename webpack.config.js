const path = require('path') 
const webpack = require('webpack')

module.exports = {
entry: "./src/client/index.js",
mode: 'development',
}
module: {
    rules: [
            {
        test: /\.js$/,// we use regex to isolate the type of file that we are going to run this loader on.
        exclude: /node_modules/,
        loader: "babel-loader"
            }
    ]
}