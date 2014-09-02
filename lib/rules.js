'use strict';

let comment_blocks = require('./comment-blocks');
let syntax = require('./syntax');
let spacesBetweenPropVal = require('./spaces-between-prop-value');
let leading_zero = require('./leading-zero');
let unit_specification = require('./unit-specification');
let double_quotes = require('./double-quotes');
let space_after_prop = require('./space-after-prop');
let lowercase = require('./lowercase');

let rules = {
    'comment_blocks': comment_blocks,
    'syntax_scss': syntax('scss'),
    'syntax_less': syntax('less'),
    'spaces_between_prop_value': spacesBetweenPropVal,
    'leading_zero': leading_zero,
    'unit_specification': unit_specification,
    'double_quotes': double_quotes,
    'space_after_prop': space_after_prop,
    'lowercase': lowercase
}

exports = module.exports = {};

exports.check = function check(file, rule) {
    return new Promise(function(resolve, reject) {
        rules[rule](file).then(function(valid) {
            resolve(valid);
        });
    });
};