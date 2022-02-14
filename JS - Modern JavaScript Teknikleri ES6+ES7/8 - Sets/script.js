// Sets (Colection - Unique Value)

let val;

var mySet = new Set();


// Set'e eleman eklemek için add metodu kullanılır;

let obj = {firstName: 'Furkan', lastName : 'Akçatepe'};

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('iki');
mySet.add({firstName: 'Furkan', lastName : 'Akçatepe'});
mySet.add(obj);


// Bir elemanın Set içerisin de olup olmadığını kontrol etmek için has metodu kullanılır;

val = mySet.has('iki');


// Set collection'ımızın eleman sayısını öğrenmek için size property'si kullanılır;

val = mySet.size;


// Set collectino'dan eleman silmek için delete metodu kullanılır;

mySet.delete(obj);


// For döngüsü ile Set elemanlarını ekrana yazdırma;

for(let item of mySet){console.log(item);}

console.log('------------------------------------------');
// Set colection'da keys ve values metodları aynı değeri temsil eder;

for (let item of mySet.keys()) {
    console.log(item);
}
for (let item of mySet.values()) {
    console.log(item);
}
for (let [key, value] of mySet.entries()) {
    console.log(key, value);
}

console.log('------------------------------------------');
// Set'i objeye Array.from() ile çevirebiliriz;

let newArray = Array.from(mySet);


// İki Set'in kesişimlerini almak(intersect);

let mySet2 = new Set([1, 2, 3, 4]);
var intersect1 = new Set(Array.from(mySet).filter(item => mySet2.has(item)));
// or
var intersect2 = new Set([...mySet].filter(item => mySet2.has(item)));


// İki Set'in farklarını almak(difference);

let difference = new Set([...mySet2].filter(item => !(mySet.has(item))))


console.log(mySet);
console.log(val);
console.log(newArray);
console.log(mySet2);
console.log(intersect1);
console.log(intersect2);
console.log(difference);