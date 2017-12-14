# max-listeners-exceeded-warning

[![build status](https://img.shields.io/travis/niftylettuce/max-listeners-exceeded-warning.svg)](https://travis-ci.org/niftylettuce/max-listeners-exceeded-warning)
[![code coverage](https://img.shields.io/codecov/c/github/niftylettuce/max-listeners-exceeded-warning.svg)](https://codecov.io/gh/niftylettuce/max-listeners-exceeded-warning)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/max-listeners-exceeded-warning.svg)](LICENSE)

> Debug and detect "MaxListenersExceededWarning: Possible EventEmitter memory leak detected warnings"
>
> Inspired by [throw-max-listeners-error][] and updated with invocation usage.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install max-listeners-exceeded-warning
```

[yarn][]:

```sh
yarn add max-listeners-exceeded-warning
```


## Usage

```js
const maxListenersExceededWarning = require('max-listeners-exceeded-warning');

maxListenersExceededWarning();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[throw-max-listeners-error]: https://github.com/nolanlawson/throw-max-listeners-error
