// Maps : key/value pairs (collection)

let val;

const numbers = new Map()

numbers.set(1, 'One');
numbers.set('2', 'two');
numbers.set(3, 'three');
numbers.set('four', 'four');

val = numbers
val = numbers.get(1);
val = numbers.get('2');
val = numbers.get('four');
val = numbers.size;
val = numbers.delete('2')
val = numbers.has('2');
// val = numbers.clear();
for(let [key, value] of numbers){
    console.log(`${key} = ${value}`);
}
console.log('---------------');
for(let [key, value] of numbers.entries()){
    console.log(`${key} = ${value}`);
}
console.log('---------------');
for(let key of numbers.keys()){
    console.log(key);
}
console.log('---------------');
for(let value of numbers.values()){
    console.log(value);
}
console.log('---------------');
numbers.forEach((key, value) => {
    console.log(key + ' - ' + value);
})
console.log('---------------');


let first = new Map([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three']
])
let second = new Map([
    [4, 'Four'],
    [5, 'Five']
])

var merged = new Map([...first, ...second]);

console.log(merged);
console.log(typeof merged);
console.log(val);