'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

var userStr = prompt();
console.log((0, _uniq2['default'])(userStr.split(',')));