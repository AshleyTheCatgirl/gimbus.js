#!/usr/bin/env node

'use strict';

var gimbus = require('../index');
var version = require('../package.json').version;
var program = require('commander');

program
    .version(version)
    .option('-s, --shorten <url>', 'Shorten URL', gimbus.shorten)
    .option('-u, --unshorten <url>', 'Unshorten URL', gimbus.unshorten)
    .parse(process.argv);

// In default mode, display help.
if (process.argv.length <= 3) {
    program.help();
}
