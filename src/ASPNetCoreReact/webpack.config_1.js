//Loaders work at the individual file level during or before the bundle is generated.
//Loaders ใช้ร่วมกับ webpack ในการ generate code modules dependencies จาก js หลายๆ file เป็น bundle.js
//Loaders เช่น babel-loader ใช้ complie es6 syntax ในขณะที่ webpack generate code,css-loader   
//Plugin ใช้เสริมการทำงานของ webpack เช่น uglifyjs-webpack-plugin ใช่ minify javascript code ที่ webpack  generate
const path = require('path');
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
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
};