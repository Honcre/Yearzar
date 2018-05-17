﻿const path = require('path'); 
const webpack = require('webpack');
console.log(__dirname);//D:\Hon\NetCore\Yearzar\src\ASPNetCoreReact
console.log(path.resolve(__dirname, 'wwwroot/dist'));//D:\Hon\NetCore\Yearzar\src\ASPNetCoreReact\wwwroot\dist
module.exports = {
    entry: './wwwroot/source/app-3.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',//object are list of Key:Value(dictionary)  access o["window.jQuery"]
            Popper: ['popper.js', 'default'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader:"style-loader"},{ loader: "css-loader" }]
            },
            {
            test: /\.js?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets:['env'],
                },
            },
            },
        ],
    },
};