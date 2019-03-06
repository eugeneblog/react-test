const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name][hash].js',
        publicPath: '/public/'
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

if (isDev) {
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    }
    config.devServer = {
        host: '0.0.0.0',
        port: '8080',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        overlay: {
            errors: true
        },
        open: true,
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config