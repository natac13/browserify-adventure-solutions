'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

exports['default'] = function (str) {
    return (0, _uniq2['default'])(str.split(','));
};

module.exports = exports['default'];