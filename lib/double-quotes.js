'use strict';

let fs = require('fs');
let split = require('split');
let through = require('through');
let Promise = require('bluebird');
let chalk = require('chalk');

exports = module.exports = function(file) {
    return new Promise(function(resolve, reject) {
        let lineNumber = 1;
        let startPattern = new RegExp(/'/g);
        let endPattern = new RegExp(/;/g);
        let error = false;
        let valid = true;

        let tr = through(function(buf) {
            let line = buf.toString();

            if (line.match(startPattern)) {
                console.error(chalk.bgBlack.red('Error:') + ' Invalid use of single quotes ' + chalk.yellow('\'\'') + '. Use double quotes ' + chalk.yellow('\"\"') + ' instead');
                error = true;
                valid = false;
            }

            if (error) {
                console.log(chalk.gray(lineNumber + '    ' + line));
            } 

            if (line.match(endPattern)) {
                error = false;
            }

            lineNumber++;
        });

        let readStream = fs.createReadStream(file);

        readStream.on('open', function() {
            readStream.pipe(split()).pipe(tr);
        });

        readStream.on('close', function() {
            resolve(valid);
        });
    });
};
