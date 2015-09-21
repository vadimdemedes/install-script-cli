# install-script-cli [![Circle CI](https://circleci.com/gh/vdemedes/install-script-cli.svg?style=svg)](https://circleci.com/gh/vdemedes/install-script-cli)

Generate universal (OS X and Linux) installation scripts for your CLI programs hosted on npm.


### Features

- Installs git, curl and stable node (if needed)
- Globally installs your npm module (`npm install -g`)
- Generates understandable code (see [template.js](https://github.com/vdemedes/install-script/blob/master/template.ejs))


### Installation

```
$ npm install install-script-cli -g
```


### Usage

See `install-script --help` for usage and examples.

```
$ install-script ava > install-ava.sh
$ bash install-ava.sh
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/install-script-cli.svg?style=svg)](https://circleci.com/gh/vdemedes/install-script-cli)

```
$ make test
```


### License

MIT © [vdemedes](https://github.com/vdemedes)
