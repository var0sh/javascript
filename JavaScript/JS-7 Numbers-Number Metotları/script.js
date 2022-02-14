// Numbers

let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.8')
// val = parseInt('1a10');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.3863459;
// val = num.toPrecision(4);
// val = num.toFixed(3);

val = Math.PI;
val = Math.round(3.6); // => 4    round metodu girilen değeri en yakın tam sayıya yuvarlar.
val = Math.round(3.3); // => 3
val = Math.ceil(3.1); // ceil metodu her zaman bir üst tam sayıya yuvarlar
val = Math.ceil(3.6);
val = Math.floor(2.3); // floor metodu her zaman bir alt tam sayıya yuvarlar
val = Math.floor(2.7); 
val = Math.sqrt(4); // sqrt metodu girilen değerin karekökünü bulur
val = Math.pow(2,5); //pow metodu bizden iki sayı ister girilen ilk değeri taban ikinci değeri tabanın kuvveti olarak kabul edip işlem yapar
val = Math.abs(-21); // abs metodu girilen değerin mutlak değerini alır
val = Math.min(1,-65,-54,99) // min metodu girilen değerlerden en küçüğünü bulup yazdırır.
val = Math.random(); // random metodu 0 ile 1 arasında random sayı atar.
val = Math.random()*10;
val = Math.floor(Math.random()*10);   

console.log(val);
console.log(typeof val);