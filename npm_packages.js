import uniq from 'uniq';

let userStr = prompt();
console.log(uniq(userStr.split(',')));