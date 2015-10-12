'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var _domify = require('domify');

var _domify2 = _interopRequireDefault(_domify);

exports['default'] = function () {
    var el = (0, _domify2['default'])('<div>Hello <span class="name"></span>!</div>');

    return {
        setName: function setName(str) {
            el.querySelector('.name').textContent = str;
            // console.log('set');
            // console.log(el.innerHTML);
        },
        appendTo: function appendTo(target) {
            target.appendChild(el);
        }
    };
};

;
module.exports = exports['default'];