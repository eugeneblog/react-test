const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name][hash].js',
        publicPath: '/public'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            include: [
                path.join(__dirname, '../client')
            ]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({         //添加插件，这个插件会生成一个h5文件，将webpack包添加到script标签中
            template: "./index.html"
        })
    ]
}
module.exports = config