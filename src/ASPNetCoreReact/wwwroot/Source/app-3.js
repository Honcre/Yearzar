//https://codeburst.io/how-to-use-webpack-in-asp-net-core-projects-a-basic-react-template-sample-25a3681a5fc2
//$ = require('jquery');
require('./lib');

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import ES6Lib from './es6codelib';

document.getElementById('fillthis').innerHTML = getText();

$("#fillthiswithjquery").html('Filled by Jquery66!');

let myES6Object = new ES6Lib();

document.getElementById('fillthiswithes6lib').innerHTML = myES6Object.getData();

module.hot.accept();