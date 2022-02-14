const fullName = 'Furkan Akçatepe';
const city = 'Eskişehir';
const yearOfBirth = 2003;
 
let val1;
let val2;

val1 = 'Benim adım ' + fullName +
      ' ve ' + city + '\'de yaşıyorum.'+
      ' Yaşım ' + (2021 - yearOfBirth)+'.'
;
// ternary operator
val2 = `Benim adım ${fullName} ve ${city}\'de yaşıyorum. Yaşım ${2021 - yearOfBirth >= 18? '18 yada daha fazla':'yaşım 18 den daha az'}.`;

console.log(val1);
console.log(val2);