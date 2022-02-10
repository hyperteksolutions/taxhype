# TaxHype Node.js Library

[![Version](https://badge.fury.io/js/taxhype.svg)](https://www.npmjs.org/package/taxhype)
[![Downloads](https://img.shields.io/npm/dm/taxhype.svg)](https://www.npmjs.com/package/taxhype)
[![Try on RunKit](https://badge.runkitcdn.com/taxhype.svg)](https://runkit.com/npm/taxhype)
[![License](https://img.shields.io/github/license/Hypertek-Solutions/taxhype)](https://github.com/Hypertek-Solutions/taxhype/blob/master/LICENSE)

The TaxHype Node library provides easy access to TaxHype APIs for applications written in server-side JavaScript.

## Documentation

See the [API Docs](https://taxhype.com/api/docs)

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install taxhype --save
# or
yarn add taxhype
```

## Usage

The package requires configuration with your API key and Secret Key, which are available in the [TaxHype Dashboard](https://dashboard.taxhype.com/).

```javascript
const taxhype = require("taxhype");
const client = new taxhype("API_KEY", "SECRET_KEY");
```
