'use strict';

var _ndjson = require('./ndjson');

console.log((0, _ndjson.parse)(prompt()));
console.log((0, _ndjson.stringify)(prompt()));