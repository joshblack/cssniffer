'use strict';

let path = require('path');
let chalk = require('chalk');

exports = module.exports = function(file) {
    let ext = path.extname(file).split('.');

    if (ext[ext.length - 1] !== "scss") {
        console.error(chalk.bgBlack.red('Error:') + ' Invalid file type, use ' + chalk.yellow('scss') + ' instead');
        console.error(chalk.gray('Filename: ') + file);
        return false;
    }

    return true;
};