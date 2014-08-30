'use strict';

let fs = require('fs');
let path = require('path');
let rules = require('../lib/rules');
let assert = require('chai').assert;

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

        it('should return false if syntax_less enabled and the file is not less', function() {
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

        it('should return true if syntax_less enabled and the file is less', function() {
            let file = path.resolve('test/mock-css/less-syntax.less');

            rules.check(file, 'syntax_less').then(function(valid) {
                assert.isTrue(valid);
                done();
            });
        });
    });
});