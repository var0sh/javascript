let num1 = Number('5');
let num2 = Number('10');
let total = num1 + num2;
console.log(typeof total);
console.log(total);

//number > string

let val1;
val1 = String(10);
console.log(typeof val1);
console.log(val1.length); /*lenght metodu değişkenimizin kaç haneli olduğunu gösterir*/
console.log(val1);

//bool > string

let val2 = true;
val2 = String(true);
console.log(typeof val2);
console.log(val2);
console.log(val2.length);

// date > string

let val3;
val3 = String(new Date().getFullYear());
console.log(typeof new Date());
console.log(val3);

//array > string

let val4 = [1,2,3,4];
val4 = String([1,2,3,4]);
console.log(typeof val4);
console.log(val4);

//toString

let val5 = (10).toString();
console.log(typeof val5);
console.log(val5);

//string > number

let val6 = '10';
val6 = Number('10');
console.log(typeof val6);
console.log(val6);
console.log(val6.toFixed(99));

let val7 = Number(true);
console.log(val7.toFixed());
let val8 = Number(false);
console.log(val8.toFixed());
let val9 = Number(null);
console.log(val9.toFixed());
let val10 = Number('a');
console.log(typeof val10);
console.log(val10);
console.log(val10.toFixed())

//parseInt

let val11 = parseInt('10');
console.log(typeof val11);
console.log(val11);
console.log(val11.length);
console.log(val11.toFixed(2));

//parseFloat

let val12 = parseFloat('10.53');
console.log(typeof val12);
console.log(val12);
console.log(val12.length);
console.log(val12.toFixed(3));
