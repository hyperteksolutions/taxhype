<h1 style="text-align:center">
TaxHype | Node.JS Server Library
</h1>

![](https://img.shields.io/github/stars/hyperteksolutions/taxhype.svg)
![](https://img.shields.io/github/forks/hyperteksolutions/taxhype.svg)
![](https://img.shields.io/github/tag/hyperteksolutions/taxhype.svg)
![](https://img.shields.io/github/release/hyperteksolutions/taxhype.svg)
![](https://img.shields.io/github/issues/hyperteksolutions/taxhype.svg)

---

[![Npm package version](https://badgen.net/npm/v/taxhype)](https://npmjs.com/package/taxhype)
[![NPM Package Downloads](https://badgen.net/npm/dt/taxhype)](https://npmjs.com/package/taxhype)
[![Try on RunKit](https://badge.runkitcdn.com/taxhype.svg)](https://runkit.com/npm/taxhype)
[![License](https://img.shields.io/github/license/hyperteksolutions/taxhype)](https://github.com/Hypertek-Solutions/taxhype/blob/master/LICENSE)
[![Dashboard](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://taxhype.com/)

---

The TaxHype Node library allows for easy integration of TaxHype API's for applications written in server-side JavaScript.

## Documentation

See the [API Docs](https://taxhype.dev)

## Requirements

Node 16 or higher.

## Installation

Install the package with:

```sh
npm install taxhype --save
# or
yarn add taxhype
```

## Usage

The package requires configuration with your API key and Secret Key, which are available in the [TaxHype Dashboard](https://dashboard.taxhype.app/).

```javascript
const taxhype = require("taxhype")("API_KEY", "API_SECRET");
```

## Questions / Suggestions

For all questions and suggestions, please create a new issue [here](https://github.com/hyperteksolutions/taxhype/issues/new) or contact [contact@hypertek.dev](mailto:contact@hypertek.dev).
