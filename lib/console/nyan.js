'use strict';

let chalk = require('chalk');

exports = module.exports = function displayNyan() {
    console.log(chalk.gray('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
    console.log(chalk.gray('naNAnananananaNANAnananananana'));
    console.log(chalk.red('-_-__')      + chalk.white(',------,')                               + chalk.gray('     nananananana'));
    console.log(chalk.yellow('-_-__')   + chalk.white('|  ')        + chalk.white(' /\\_/\\')    + chalk.gray('     nananananan')); 
    console.log(chalk.green('-_-__')    +chalk.white('|__')          + chalk.white('( ^ .^)')    + chalk.gray('    nananananan'));
    console.log(chalk.blue('-_-__')     + chalk.white('""   ""')                                 + chalk.gray('      nananananana'));
    console.log(chalk.gray('naNAnananananaNANAnananananana'));
    console.log(chalk.gray('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));   
}