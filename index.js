#!/usr/bin/env node

'use strict';

/**
 * Dependencies
 */

var generate = require('install-script');
var meow = require('meow');


/**
 * CLI for install-script
 */

var cli = meow({
  help: [
    'Usage',
    '  install-script <name>',
    '',
    'Example',
    '  install-script ava > install-ava.sh',
    ''
  ]
});

if (cli.flags.h || cli.input.length === 0) {
  cli.showHelp();
}

var script = generate({
  name: cli.input[0]
});

console.log(script);
