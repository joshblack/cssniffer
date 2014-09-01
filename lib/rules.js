'use strict';

let comment_blocks = require('./comment-blocks');
let syntax = require('./syntax');
let spacesBetweenPropVal = require('./spaces-between-prop-value');
let leading_zero = require('./leading-zero');
let unit_specification = require('./unit-specification');
let single_quotes = require('./single-quotes');

let rules = {
    'comment_blocks': comment_blocks,
    'syntax_scss': syntax('scss'),
    'syntax_less': syntax('less'),
    'spaces_between_prop_value': spacesBetweenPropVal,
    'leading_zero': leading_zero,
    'unit_specification': unit_specification,
    'single_quotes': single_quotes
}

exports = module.exports = {};

exports.check = function check(file, rule) {
    return new Promise(function(resolve, reject) {
        rules[rule](file).then(function(valid) {
            resolve(valid);
        });
    });
};