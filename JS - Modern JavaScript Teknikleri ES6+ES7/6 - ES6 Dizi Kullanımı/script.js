// Arrays in ES6
const boxes = document.querySelectorAll('span');

// ES5
let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box){
//     box.style.backgroundColor = 'green'
// });
// console.log(boxesES5);

// ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor = 'green')

// ES5
// for (let i = 0; i < boxesES5.length; i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = 'I\'m changed';
//     boxesES5[i].style.backgroundColor = 'blue';
// }

// ES6

// var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = 'I\'m changed';
//     box.style.backgroundColor = 'blue'
// }

// console.log(boxesES6);

// .from()
// let arr = Array.from('Furkan Akçatepe');

const products = [
    {name: 'Samsung 0', price: 3000},
    {name: 'Samsung 1', price: 4000},
    {name: 'Samsung 1', price: 4300},
    {name: 'Samsung 2', price: 5000}
]

console.log(Array.from(products, prd => prd.name === 'Samsung 0')); // from bize dizi döndürür
console.log(products.find(prd => prd.name === 'Samsung 2')); // find bize karşılaştığı ilk değeri obje olarak döndürür
console.log(products.filter(prd => prd.name === 'Samsung 1')); // filter bize obje dizisi döndürür
console.log(products.findIndex(prd => prd.price === 4000)); // herhangi bir değer varmı yokmu ona bakar, varsa indexini döndürür

let numbers = ['a', 'b', 'c'];

let entries = numbers.entries(); // entries bize dizideki her bir elemanı ve indexini sırasıyla döndürür

for(let i of entries){
    console.log(i);
};

let keys = numbers.keys(); // keys bize dizideki her bir elemanın sırasıyla indexini döndürür

for(let i of keys){
    console.log(i);
}

let values = numbers.values(); // values bize dizideki her elemanı sırasıyla indexsiz döndürür

for(let i of values){
    console.log(i);
}