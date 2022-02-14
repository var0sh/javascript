let val;
let num = 10;

//object literal > objeler bize ek proto'lar katar
let furkan = {
    name: 'furkan',
    yearOfBirth: 2003,
    job: 'student'
};

//array > array'ler ise obje olmalarının yanı sıra bizlere array olmalarından dolayı da yeni proto'lar katar
let numbers = [1, 3, 8, 21];

val = num;
val = furkan;
val = numbers;

console.log(val);
console.log(typeof val);