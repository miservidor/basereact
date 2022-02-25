const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js'
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            { 
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.html$/,
                use: 'html-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}