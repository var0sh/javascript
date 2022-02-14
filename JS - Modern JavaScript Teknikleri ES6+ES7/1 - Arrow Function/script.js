// Arrow Function

// ES5

let welcomeES5 = function(){
    console.log('Hello from ES5');
}
welcomeES5();

// ES6

let welcomeES6 = () => {
    console.log(`Hello from ES6`);
}
welcomeES6();

// with parameters

let multiplyES5 = function(x, y){
    return x * y;
}
console.log(multiplyES5(10, 5));

// ES6
let multiplyES6 = (x, y) => {
    return x * y;
}
console.log(multiplyES6(3, 5));

// ES5
let splitES5 = function(text){
    return text.split(' ');
}
console.log(splitES5('Adım furkan'));

// ES6
let splitES6 = text => {
    return text.split(' ');
}
console.log(splitES6('Adım Furkan'));

// ES5 Object Literals
let getProductES5 = function(id, name){
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5('0', 'Furkan'));

// ES6 Object Literals
let getProductES6 = (id, name) => (
    {
        id: id,
        name: name
    }
)
console.log(getProductES6('0', 'Taha'));

const phones = [
    {name: 'IPhone 8', price: 3000},
    {name: 'IPhone 5', price: 1000},
    {name: 'IPhone 6', price: 2000},
    {name: 'IPhone 7', price: 2500}
]

// ES5
let pricesES5 = phones.map(function(phone){
    return phone.price;
})
console.log(pricesES5);

// ES6
let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);

// ES5
const ary = [1, 2, 4, 3, 6, 8, 9, 10, 12];
let evenES5 = ary.filter(function(a){
    return a%2 == 0;
})
console.log(evenES5);

// ES6
let evenES6 = ary.filter(a => a % 2 == 1)
console.log(evenES6);