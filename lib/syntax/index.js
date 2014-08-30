'use strict';

let scss = require('./scss');
let less = require('./less');

let rules = {
    'scss': scss,
    'less': less
};

exports = module.exports = function(type) {
    return function(file) {
        rules[type](file);
    }
}