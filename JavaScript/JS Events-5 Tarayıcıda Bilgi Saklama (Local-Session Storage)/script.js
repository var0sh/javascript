// ****Local Storage
let val;
// **set item > storage'e eleman eklemek için
const firstName = localStorage.setItem('firstName', 'Furkan');
const lastName = localStorage.setItem('lastName', 'Akçatepe');
let hobbies = ['gezmek', 'yazılım', 'spor'];

// **get item > eleman seçmek-almak için
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

console.log(val);

// **remove item > storage'den item silmek için
// localStorage.removeItem('firstName');

// **clear > storage içersindeki tüm elemanları silmek için kullanırız
localStorage.clear();

// **set array to storage
localStorage.setItem('hobbies', hobbies); // bir diziyi storage'e bu şekilde eklersek storage diziyi string ifadeye çevirerek depolar
localStorage.setItem('hobbies', JSON.stringify(hobbies)); // fakat bu şekilde eklersek dizi olarak eklemiş oluruz.

val = JSON.parse(localStorage.getItem('hobbies')); // dizi olarak kaydettiğimiz değişkenimizi JSON.parse() metodu ile dizi şeklinde val'in içine attık

console.log(val);
console.log(localStorage);

// ****Session Storage
// const city = sessionStorage.setItem('city', 'Eskişehir');
// const country = sessionStorage.setItem('country', 'Türkiye');

// console.log(sessionStorage);