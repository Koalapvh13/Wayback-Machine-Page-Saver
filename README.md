# Wayback-Machine-Page-Saver
NPM Package to save snapshots from web pages to http://web.archive.org/web/

## How to Install

```npm i wayback-pagesaver```

## Usage
```
const wb = require("wayback-pagesaver")

wb("https://dev.to/wolfiton/10-reasons-to-choose-linux-452o")
    .then(console.log) // https://web.archive.org/web/20200226214547/https://dev.to/wolfiton/10-reasons-to-choose-linux-452o
    .catch(console.log) // error
```
