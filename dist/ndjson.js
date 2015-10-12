'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.parse = parse;
exports.stringify = stringify;

function parse(str) {
    return str.split('\n').map(function (line) {
        return JSON.parse(line);
    });
}

;

function stringify(arr) {
    return arr.map(function (line) {
        return JSON.stringify(line);
    }).join('\n');
}