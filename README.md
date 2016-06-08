# Voltus
The propose of this package is to handle validator of communs values, like Phone Numbers, Address, Emails, etc.

[![Join the chat at https://gitter.im/italoacasas/voltus](https://badges.gitter.im/italoacasas/voltus.svg)](https://gitter.im/italoacasas/voltus?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/voltus.svg)](https://badge.fury.io/js/voltus)
[![Build Status](https://travis-ci.org/italoacasas/voltus.svg?branch=master)](https://travis-ci.org/italoacasas/voltus)
[![Dependency Status](https://david-dm.org/italoacasas/voltus.svg)](https://david-dm.org/italoacasas/voltus)
[![devDependency Status](https://david-dm.org/italoacasas/voltus/dev-status.svg?theme=shields.io)](https://david-dm.org/italoacasas/voltus#info=devDependencies)
[![NPM](https://nodei.co/npm/voltus.png?downloads=true)](https://nodei.co/npm/voltus/)

## Installation
`npm install --save voltus`

## Example of use
```javascript
const voltus = require('voltus')

voltus.email('testing@gmail.com') // true
voltus.phone('florida') // false
```

## API
- `email(value)`
- `bakAccount(value)`
- `password(value)`
- `phone(value)`
- `socialSecurity(value)`
- `number(value)`

## License
This software is licensed under the MIT License.

Copyright Italo A. Casas, 2016.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
