var hak, can;
var tahmin, sayac = 0;
var puan = 100;
can = Number(prompt('kaç kerede bileceksiniz'));
hak = can;

var sayi = Math.floor(Math.random() * 10) + 1;
console.log(sayi);

while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));
    if (sayi == tahmin) {
        console.log(`tebrikler ${sayac} defada bildiniz`);
        console.log(`puanınız: ${puan - ((sayac - 1) * 100/can)}`);
        break;
    }else if(sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşşağı');
    }

    if (hak == 0) {
        console.log('hakkınız bitti. sayı: ' + sayi);
        console.log(`puanınız: ${puan - ((sayac - 1) * can)}`);
    }
}