let file = process.argv[2];

// Need a list of the rules that we are checking for
let options = require('./options.json');
let rules = require('./lib/rules');

// Let's check them!
Object.keys(options).forEach(function(option) {
    if (options[option]) {
        // Let's run the rule for this option
        rules.check(file, option);
    }
});