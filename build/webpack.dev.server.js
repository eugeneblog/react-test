const path = require('path')
const config = {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server.entry.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server-entry.js',
        publicPath: '/public',
        libraryTarget: 'commonjs2'
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
    }
}
module.exports = config