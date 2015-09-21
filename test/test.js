'use strict';

/**
 * Dependencies
 */

const exec = require('mz/child_process').exec;
const test = require('ava');


/**
 * Tests
 */

test ('build a script', function (t) {
  let options = {
    cwd: __dirname
  };

  return exec('../index.js ava > install-script.sh', options)
    .then(function () {
      return exec('docker build -t test-install-script-cli .', options);
    })
    .then(function () {
      return exec('docker run test-install-script-cli ava --help');
    })
    .then(function () {
      return exec('rm install-script.sh', options);
    });
});
