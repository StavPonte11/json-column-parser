![npm](https://img.shields.io/npm/v/json-column-parser) ![npm](https://img.shields.io/npm/dw/json-column-parser) ![GitHub](https://img.shields.io/github/license/StavPonte11/json-column-parser) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/json-column-parser)

# json-column-parser
A JSON parser for several big data sources formatted columns.

This package provides the required functionality to process the type of a complex column to a convenient json representation.

### Nested Hive Column Example
```
array<struct<student:struct<name:string,id:string,subjects:array<struct<sub_name:string,sub_id:bigint>>>,supply:struct<
amount:bigint,product:struct<product_id:string,product_name:string,template:struct<code:string,currency:string>>,color:string>>>
```

## Quick Start

### Installation
Install this component with [NPM](https://www.npmjs.com/package/json-column-parser).
```shell
npm install --save json-column-parser
```

### Implementation
```js
import { parser, types } from "json-column-parser";

// Parse one or more columns
// The nestedColumn used is the one from the example 	above
const parsed = parser.parseColumns([
  { name: "test_column", type: nestedColumn, description: "test_description" },
]);

console.dir(parsed[0].colType);
console.dir((parsed[0].colType as types.JSONArray)[0]);
```

### Output

```js
[
  {
    student: { name: 'string', id: 'string', subjects: [Array] },
    supply: { amount: 'bigint', product: [Object], color: 'string' }
  }
]
```

```js
{
  student: { name: 'string', id: 'string', subjects: [ [Object] ] },
  supply: {
    amount: 'bigint',
    product: {
      product_id: 'string',
      product_name: 'string',
      template: [Object]
    },
    color: 'string'
  }
}
```

