'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniquely = require('./uniquely');

var _uniquely2 = _interopRequireDefault(_uniquely);

var tmp = prompt();

console.log((0, _uniquely2['default'])(tmp));