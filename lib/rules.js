'use strict';

let comment_blocks = require('./comment-blocks');
let syntax = require('./syntax');
let spacesBetweenPropVal = require('./spaces-between-prop-value');

let rules = {
    'comment_blocks': comment_blocks,
    'syntax_scss': syntax('scss'),
    'syntax_less': syntax('less'),
    'spaces_between_prop_value': spacesBetweenPropVal
}

exports = module.exports = {};

exports.check = function check(file, rule) {
    return new Promise(function(resolve, reject) {
        rules[rule](file).then(function(valid) {
            resolve(valid);
        });        
    });
};