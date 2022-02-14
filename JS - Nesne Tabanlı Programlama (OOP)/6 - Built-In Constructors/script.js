// String

var str1 = 'Furkan';
var str2 = new String('Furkan'); // New anahtar kelimesini kullanarak bir object oluşturduğumuzu söylüyoruz. Bu yüzden bunun tipi object'dir.

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);


// Tip kontrolü yaptığımız zaman bize str1 true döndürürken str2 false döndürür. Çünkü str2 bir nesnedir(object).

if(str1 === 'Furkan'){
    console.log('true');
}else{
    console.log('false');
}

console.log('furkan'.repeat(4));

// Number

var num1 = 10;
var num2 = new Number(10);


// Boolean

var bool1 = true;
var bool2 = new Boolean(true);


// Object

var object1 = {
    name : 'furkan'
}
var obj2 = new Object({
    name : 'furkan'
})


// Array

var arr1 = ['furkan', 'taha', 'ayşe', 'halil'];
var arr2 = new Array('furkan', 'taha', 'ayşe', 'halil');

Array.prototype.remove = Array.prototype.remove || function(member){
    var index = this.indexOf(member);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

console.log(arr1.remove('furkan'));