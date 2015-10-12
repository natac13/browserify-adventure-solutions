import url from 'url';
import querystring from 'querystring';
let pro = prompt();
let query = url.parse(pro).query;
let queryObj = querystring.parse(query);


console.log(url.resolve(url.parse(pro).href, queryObj.file));