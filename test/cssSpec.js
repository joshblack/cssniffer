'use strict';

let fs = require('fs');
let path = require('path');
let rules = require('../lib/rules');
let assert = require('chai').assert;
let nyan = require('../lib/console/nyan');

nyan();

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

    describe('#space-after-property()', function() {
        it('should return true if there is a space after the property', function(done) {
            let file = path.resolve('test/mock-css/space-after-prop.scss');

            rules.check(file, 'space_after_prop').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });

        it('should return false if there is not a space after the property', function(done) {
            let file = path.resolve('test/mock-css/no-space-after-prop.scss');

            rules.check(file, 'space_after_prop').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });
    });

    describe('#lower-case()', function() {
        // it('should return true if everything is lower case', function(done) {

        // });

        it('should return false if something is uppercase', function(done) {
            let file = path.resolve('test/mock-css/uppercase.scss');

            rules.check(file, 'lowercase').then(function(valid) {
                assert.isFalse(valid);
                done();
            });
        });
    });
});