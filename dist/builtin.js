'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var pro = prompt();
var query = _url2['default'].parse(pro).query;
var queryObj = _querystring2['default'].parse(query);

console.log(_url2['default'].resolve(_url2['default'].parse(pro).href, queryObj.file));