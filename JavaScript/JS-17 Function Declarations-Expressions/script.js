// function declarations
// function sum(a, b){
//       let c = a + b;
//       return c;
// };
// console.log(sam(10, 20));

// function expressions
// const sum = function(a, b) {
//       if (typeof a === 'undefined') {
//             a = 0;
//       }else if (typeof b === 'undefined') {
//             b = 0;
//       }
//       let c = a + b;
//       return c;
// }

// ES6 ile gelen fonksiyon tanımlarken argümana değer atama özelliği
// const sum = function(a = 0, b = 0) {
//       let c = a + b;
//       return c;
// }
// console.log(sum(10 ,20));
// console.log(sum(10));

const sumAll = function() {
      let total = 0;
      for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
      }
      return total;
}
console.log(sumAll(10,20,50));