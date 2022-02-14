// toplamda 3 basamaklı sayı yazdır
var num1 = 15.123456789;
console.log('ex1: '+num1.toPrecision(3));

// ondalık kısmı 3 basamak yazdır
var num2 = 15.123456789;
console.log('ex2: '+num2.toFixed(3));

// en yakın sayıya yuvarla
var num3 = 15.123456789;
num3 = Math.round(num3);
console.log('ex3: '+num3);

// aşağı yuvarla
var num4 = 15.123456789;
num4 = Math.floor(num4);
console.log('ex4: '+num4);

// yukarı yuvarla
var num5 = 15.123456789;
num5 = Math.ceil(num5);
console.log('ex5: '+num5);

// 1, 2, 10, 56, 20 sayılarından en küçük ve en büyüğü bul
num6max = Math.max(1, 2, 10, 56, 20);
num6min = Math.min(1, 2, 10, 56, 20);
console.log('ex6max: '+num6max);
console.log('ex6min: '+num6min);

// sayı aralığını kullanıcının belirteceği rastgele bir sayı üretin
let max = 124;
let min = 62;
console.log('62-124 Aralığı Random Sayı: '+Math.round(min + Math.random()*(max-min)));

/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayın
   **Brüt Maaş  : 3700 TL
   **Brüt Mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş ne kadardır?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/
let maas = 3700;
let mesai = 10.3;
let total = maas + (mesai)*42;
console.log('toplam brüt maaş: '+ total);
let netMaas = (total)*(3/4);
console.log('net maaş: '+ Math.round(netMaas));