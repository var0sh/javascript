//name
const customerFirstName = 'Furkan ';
const customerSurName = 'Akçatepe';

//id
const customerId = 21788002068;

//total
let total = parseFloat(218.5);

//gender
let gender = true; //erkek

//address
let customerAddress ={
    city : 'Eskişehir',
    country : 'Türkiye',
    body : 'Şirintepe mah no:45'
} 

//hobbies
let hobbies = ['Web Design', 'Kitap', 'Spor'];

//Aşşağıdaki siparişlerin toplamını hesaplayınız.
var order1 = Number('100');
var order2 = Number('150');
var totalOrder1 = order1 + order2;
console.log(totalOrder1);

var order3 = parseFloat('100.2');
var order4 = parseFloat('150.5');
var totalOrder2 = (order3 + order4);
console.log(totalOrder2);

var order3 = parseInt('100.2');
var order4 = parseInt('150.5');
var totalOrder3 = (order3 + order4);
console.log(totalOrder3);

//Aşağıda verilen doğum yılına göre yaş hesaplayınız.
const yearOfBirth = 2003;
console.log(new Date().getFullYear() - yearOfBirth);

//Aşağıdaki string ifadenin karakter sayısını bulunuz.
var meName = 'Furkan Akçatepe';
console.log(meName.length);