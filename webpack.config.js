const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './lib/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'React-UI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /tsx?/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}