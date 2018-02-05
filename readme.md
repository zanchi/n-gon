# n-gon
> Create regular polygons with `n` sides

![stop sign](stop.png "hmmm")

## Install
```sh
npm install @zanchi/n-gon
```

## Usage
A "polygon" is just an array of points
```javascript
const { ngon, ngonVec } = require('@zanchi/n-gon');

const triangle = ngon(3, 10 /* optional size param */)
// triangle[0] === {x: 10, y: 0}

const square = ngonVec(4, 5);
//square[0] === [5, 0]
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
