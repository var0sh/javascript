var names = ['furkan', 'taha', 'ayşe', 'halil'];
var years = [2003, 2011, 1981, 1979];
var mix = ['furkan', 2003, ['sinema', 'spor', 'yazılım'], null, undefined];
var names1 = ['furkan', 'ayşe', 'taha', 'halil'];

// get array item
console.log(mix[2]);

// set array item
names[0] = 'faruk';
names[names.length] = 'rümeysa';

// push > dizinin sonuna yeni bir eleman ekler
years.push(1453);

// unshift > dizinin başına yeni eleman ekler
years.unshift('kanguru');

// pop > dizinin son elemanını siler
years.pop();

// shift > dizinin ilk elemanını siler
years.shift();

// indexof > girilen değerin dizide kaçıncı indekste barındığını gösterir
let index = years.indexOf(1979);
console.log('index: '+index);

// reverse > diziyi tersten sıralar
years.reverse();

// sort > küçükten büyüğe / a'dan z'ye sıralar
names.sort();

// concat > dizileri birleştirir
let namesYears = names.concat(years);
console.log(namesYears);

// splice > ilk değeri başlangıç indexini, ikinci değeri kaç adet eleman sileceğini ve üçüncü değeri ise silinen elemanlardan sonra diziye eklenecek olan elemanları belirtir
names1.splice(1, 1, 'faruk', 'mitat');

function over18(year){
      let age = 2018 - year;
      return age >= 18; /*dönen değer 18'den büyükse 'true' değilse 'false döner'*/
}
// find > karşılaştığı değerlerden koşulu sağlayan ilk değeri döndürür
let val1;
console.log('val1(find): '+ over18(2010));

// filter > karşılaştığı değerlerden koşulu sağlayan tüm değerleri döndürür
let val2 = years.filter(over18);
console.log('val2(filter): '+ val2);

console.log(names);
console.log('years: '+years);
console.log(mix);

console.log(names.length);

console.log(typeof names);

console.log(names1);