'use strict';

let fs = require('fs');
let path = require('path');
let chalk = require('chalk');
let rules = require('../lib/rules');
let assert = require('chai').assert;

console.log(chalk.gray('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
console.log(chalk.gray('naNAnananananaNANAnananananana'));
console.log(chalk.red('-_-__')      + chalk.white(',------,')                               + chalk.gray('     nananananana'));
console.log(chalk.yellow('-_-__')   + chalk.white('|  ')        + chalk.white(' /\\_/\\')    + chalk.gray('     nananananan')); 
console.log(chalk.green('-_-__')    +chalk.white('|__')          + chalk.white('( ^ .^)')    + chalk.gray('    nananananan'));
console.log(chalk.blue('-_-__')     + chalk.white('""   ""')                                 + chalk.gray('      nananananana'));
console.log(chalk.gray('naNAnananananaNANAnananananana'));
console.log(chalk.gray('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));

describe('CSS', function() {
    describe('#comment-blocks()', function() {
        it('should return false for an invalid inline-style comment', function(done) {
            let file = path.resolve('test/mock-css/invalid-inline-comment.scss');

            rules.check(file, 'comment_blocks').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return false for invalid block-style comments', function(done) {
            let file = path.resolve('test/mock-css/invalid-block-comment.scss');

            rules.check(file, 'comment_blocks').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return true for a valid inline-style comment', function(done) {
            let file = path.resolve('test/mock-css/valid-inline-comment.scss');

            rules.check(file, 'comment_blocks').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });

        it('should return true for a valid block-style comment', function() {
            let file = path.resolve('test/mock-css/valid-block-comment.scss');

            rules.check(file, 'comment_blocks').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });
    });

    describe('#syntax()', function() {
        it('should return false if syntax_scss enabled and the file is not scss', function(done) {
            let file = path.resolve('test/mock-css/less-syntax.less');

            rules.check(file, 'syntax_scss').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return false if syntax_less enabled and the file is not less', function(done) {
            let file = path.resolve('test/mock-css/scss-syntax.scss');

            rules.check(file, 'syntax_less').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return true if syntax_scss enabled and the file is scss', function(done) {
            let file = path.resolve('test/mock-css/scss-syntax.scss');

            rules.check(file, 'syntax_scss').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });

        it('should return true if syntax_less enabled and the file is less', function(done) {
            let file = path.resolve('test/mock-css/less-syntax.less');

            rules.check(file, 'syntax_less').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });
    });

    describe('#leading-zero()', function() {
        it('should return false if a decimal value doesn\'t have a leading 0', function(done) {
            let file = path.resolve('test/mock-css/non-leading-zero.scss');

            rules.check(file, 'leading_zero').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return true if a decimal value does have a leading 0', function(done) {
            let file = path.resolve('test/mock-css/leading-zero.scss');

            rules.check(file, 'leading_zero').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });
    });

    describe('#unit-specification()', function() {
        it('should return false if a unit specification follows a 0', function(done) {
            let file = path.resolve('test/mock-css/unit-spec.scss');

            rules.check(file, 'unit_specification').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });

        it('should return true if a unit specification is absent after a 0', function(done) {
            let file = path.resolve('test/mock-css/no-unit-spec.scss');

            rules.check(file, 'unit_specification').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });
    });

    describe('#double-quotes()', function() {
        it('should return true if double quotes are used', function(done) {
            let file = path.resolve('test/mock-css/double-quotes.scss');

            rules.check(file, 'double_quotes').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });

        it('should return false if single quotes are used', function(done) {
            let file = path.resolve('test/mock-css/single-quotes.scss');

            rules.check(file, 'double_quotes').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });
    });
});