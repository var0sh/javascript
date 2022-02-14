// Destructuring

// Destructuring Assignment
var a, b, rest;
[a, b] = [10, 20];

console.log(a, b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

console.log(a, b, rest);

({a, b} = {a: 10, b: 20});
console.log(a, b);

({a, b, ...rest} = {a : 10, b : 20, c : 30, d: 40})
console.log(a, b, rest);

// Array Destructuring
const arrConfig = ['localhost', '8080', '900'];

// ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeOut = arrConfig[2];

// console.log(server, port, timeOut);

// ES6
// var [server, port, timeOut] = arrConfig;

// console.log(server, port, timeOut);

// Object Destructuring
// const objConfig = {
//     server : 'localhost',
//     port : '8080',
//     timeOut : 900
// }

// ES5
// var server = objConfig.server;
// var port = objConfig.port;
// var timeOut = objConfig.timeOut;

// console.log(server, port, timeOut);

// ES6
// const {server, port, timeOut} = objConfig;

// console.log(server, port, timeOut);

// let {timeOut : t} = objConfig;

// console.log(t);

/***************************************************************************************************************** */

// const objConfig = {
//     server : 'localhost',
//     port : '8080'
// }

// let {server, port, timeOut = 900} = objConfig;

// console.log(server, port, timeOut);

const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

const [, salı, , per] = days;

console.log(salı, per);