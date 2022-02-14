var a = 10;
var b = a;

console.log(a);
console.log(b);

var obj1 = {
    name: 'furkan',
    age: 18
}
var obj2 = obj1;
obj1.age = 12;

console.log(obj1.age);
console.log(obj2.age);

var num = 50;
var account = {
    name: 'furkan',
    accountNumber: '123456'
}

function update(a, b){
    a = 100;
    b.accountNumber = '22222222';
}
update(num, account);
console.log(num);
console.log(account);