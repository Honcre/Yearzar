const path = require('path');
module.exports = {
    entry: './wwwroot/source/app-2.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    }
};