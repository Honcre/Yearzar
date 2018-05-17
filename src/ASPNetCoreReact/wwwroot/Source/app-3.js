//$ = require('jquery');
require('./lib');

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import ES6Lib from './es6codelib';

document.getElementById('fillthis').innerHTML = getText();

$("#fillthiswithjquery").html('Filled by Jquery!');

let myES6Object = new ES6Lib();

document.getElementById('fillthiswithes6lib').innerHTML = myES6Object.getData();