const firstName = "Furkan";
const lastName = 'Akçatepe';
const age = 18;
const hobbies = 'kitap spor sinema yazılım';

let val;

// string concatenation(birleştirme)
val = firstName + ' ' + lastName;
val = 'Furkan';
val += ' Akçatepe';
val = 'Benim adım ' + firstName + ' ' + lastName + ' ve yaşım ' + age + '.' + ' Eskişehir\'de yaşıyorum';

// string concat > aldığı değerleri birleştiri
val = firstName.concat(' ',lastName);

// string lenght
//val = val.length;

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// split > girilen değerlerden itibaren elemanları ayırarak bir dizi haline getirir
val = hobbies.split(' ');

// string replace > string içerisindeki bir değeri değiştirmek istediğimizde kullanırız
//val = '    ' + val.replace('furkan', 'furki') + '       ';

// trim > fazladan boşluk karakterlerini siler
//val = val.trim();

// substring > iki değer alır ve ilk değer ile ikinci değer aralığındaki string ifadeyi yazdırır
//val = val.substring(4,9);

// slice, substring alternatifi
//val = val.slice(1);

//val = val.indexOf('k'); > girdiğimiz değerin kaçıncı index'te olduğunu söyler

//val = val[0];

console.log(val);
console.log(typeof val);