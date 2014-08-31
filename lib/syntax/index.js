'use strict';

let Promise = require('bluebird');
let scss = require('./scss');
let less = require('./less');

let rules = {
    'scss': scss,
    'less': less
};

exports = module.exports = function(type) {
    return function(file) {
        return new Promise(function(resolve, reject) {
            resolve(rules[type](file));
        });
    }
}