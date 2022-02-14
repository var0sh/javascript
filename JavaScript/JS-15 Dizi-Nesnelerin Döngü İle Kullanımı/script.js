let cars = [
      'bmw',
      'mercedes',
      'toyota'
];
let people = [
      {firstName:'Furkan', lastName:'Akçatepe'},
      {firstName:'Halil', lastName:'Akçatepe'},
      {firstName:'Ayşe', lastName:'Akçatepe'},
      {firstName:'Taha', lastName:'Akçatepe'},
];

// for (let i = 0; i < cars.length; i++) {
//       console.log(cars[i]);
// }

// for(let i = 0; i < people.length; i++){
//       console.log(people[i].firstName);
// };


// for-in

// for(let i in cars){
//       console.log(`index: ${i} value: ${cars[i]}`);
// }

// for(let i in people){
//       console.log(people[i].firstName);
// };

// foreach
// cars.forEach(function(item, index, array){
//       console.log(item);
//       console.log(index);
//       console.log(array);
// });

// people.forEach(function(i){
//       console.log(i.firstName);
// });


// map > dizi döndürür
// let val = people.map(function(item){
//       return item.firstName + ' ' + item.lastName;
// });
// console.log(val);

let numbers = [1, 4, 6, 5, 12];
let num = numbers.map(function(item){
      return item * item; 
});
console.log(num);