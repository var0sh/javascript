let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

// Aritmatik Operatörler
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++; // Önce val'in içine atar sonra arttırır
val = ++d; // Önce arttırır sonra val'in içine atar

// Atama Operatörleri
val = a;
val += a;

// Karşılaştırma Operatörleri
val = a == b; // val'in içine a'nın b'ye eşit olma durumunu atıyoruz val burada false döndürür çünkü a b'ye eşit değildir
val = b == c;
val = b === c; // burada hem değer hemde type(int-float-string-bool) kontrolü yapılıyor
val = a != b; // a b'ye eşit değil mi? true döndürür çünkü a b'ye eşit değildir
val = a > b; // a b'den büyükmü

// Mantıksal Operatörler
  // && (ve)
  val = (a > b) && (a > c);

  // || (veya)

  // ! (değil)



console.log(typeof val);
console.log(val);


