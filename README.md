# node-firefox-find-wifi-devices [![Build Status](https://secure.travis-ci.org/mozilla/node-firefox-find-wifi-devices.png?branch=master)](http://travis-ci.org/mozilla/node-firefox-find-wifi-devices)

> Find Firefox devices using wifi discovery.

[![Install with NPM](https://nodei.co/npm/node-firefox-find-wifi-devices.png?downloads=true&stars=true)](https://nodei.co/npm/node-firefox-find-wifi-devices/)

This is part of the [node-firefox](https://github.com/mozilla/node-firefox) project.

Firefox devices can be configured for discovery over wifi, allowing a secure
wireless connection to the DevTools service.

## Installation

### From git

```bash
git clone https://github.com/mozilla/node-firefox-find-wifi-devices.git
cd node-firefox-find-wifi-devices
npm install
```

If you want to update later on:

```bash
cd node-firefox-find-wifi-devices
git pull origin master
npm install
```

### npm

```bash
npm install node-firefox-find-wifi-devices
```

## Usage

Docs to be written.

## Running the tests

After installing, you can simply run the following from the module folder:

```bash
npm test
```

To add a new unit test file, create a new file in the `tests/unit` folder. Any file that matches `test.*.js` will be run as a test by the appropriate test runner, based on the folder location.

We use `gulp` behind the scenes to run the test; if you don't have it installed globally you can use `npm gulp` from inside the project's root folder to run `gulp`.

### Code quality and style

Because we have multiple contributors working on our projects, we value consistent code styles. It makes it easier to read code written by many people! :-)

Our tests include unit tests as well as code quality ("linting") tests that make sure our test pass a style guide and [JSHint](http://jshint.com/). Instead of submitting code with the wrong indentation or a different style, run the tests and you will be told where your code quality/style differs from ours and instructions on how to fix it.

This program is free software; it is distributed under an
[Apache License](https://github.com/mozilla/node-firefox-find-wifi-devices/blob/master/LICENSE).

## Copyright

Copyright (c) 2015 [Mozilla](https://mozilla.org)
([Contributors](https://github.com/mozilla/node-firefox-find-wifi-devices/graphs/contributors)).
