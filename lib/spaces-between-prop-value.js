'use strict';

let fs = require('fs');
let split = require('split');
let through = require('through');
let chalk = require('chalk');

exports = module.exports = function(file) {
    let lineNumber = 1;
    let startPattern = new RegExp(/:\S/g);
    let endPattern = new RegExp(/;/g);
    let error = false;

    let tr = through(function(buf) {
        let line = buf.toString();

        if (line.match(startPattern)) {
            console.error(chalk.bgBlack.red('Error:') + ' Put spaces between properties and their values');
            error = true;
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
}