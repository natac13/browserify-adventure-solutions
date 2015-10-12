var domify = require('domify');

module.exports = Widget;

function Widget () {
  var element = domify('<div>Hello <span class="name"></span>!</div>');

  return {
    setName: function (str) {
            var span = element.querySelector('span.name');
            span.textContent = str;
            },
    appendTo: function (target) {
            target.appendChild(element);
            }
    };
};

