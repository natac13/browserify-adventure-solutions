import domify from 'domify';

export default function() {
    let el = domify('<div>Hello <span class="name"></span>!</div>');

    return {
        setName(str) {
            el.querySelector('.name').textContent = str;
            // console.log('set');
            // console.log(el.innerHTML);
        },
        appendTo(target) {
            target.appendChild(el);
        }
    }
};