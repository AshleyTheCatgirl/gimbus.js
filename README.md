# gimbus.js

> A small library providing utility methods to `shorten` and `unshorten` URLs using [https://gimb.us/'s](https://gimb.us/) API.

## Installation

### CLI

```
$ npm install gimbus -g
```

### Locally

```
$ npm install gimbus --save
```

## Usage

### CLI

```
$ gimbus http://ashley.re
```

### Locally

```js
var gimbus = require('gimbus');
var url = "http://ashley.re";
gimbus.shorten(url);  // if no callback is specified, it'll use console.log as a callback
gimbus.shorten(url, function (short_url) {
    console.log("Shortened URL is: ", short_url);
    gimbus.unshorten(short_url, function (url) {
        console.log(short_url, "points to", url);
    });
});
```

```
$ node test.js
https://gimb.us/VHCL1
Shortened URL is: https://gimb.us/VHCL1
https://gimb.us/VHCL1 points to http://ashley.re
```

## Tests

```
$ npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Add CLI interface
* 0.1.0 Initial release
