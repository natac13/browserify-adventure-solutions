'use strict';

var domify = require('domify');

module.exports = Widget;

function Widget() {
        var element = domify('<div>Hello <span class="name"></span>!</div>');

        return {
                setName: function setName(str) {
                        var span = element.querySelector('span.name');
                        span.textContent = str;
                },
                appendTo: function appendTo(target) {
                        target.appendChild(element);
                }
        };
};