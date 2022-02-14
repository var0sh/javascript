// Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let soru1 = new Date();
console.log(soru1);

// Tarih ve saat bilgisini içeren bir date objesi oluşturunuz.
let soru2_0 = new Date('02/12/2003 11:30:34');
let soru2_1 = new Date(2003, 01, 12, 11, 30, 34);
console.log("soru2_0: "+soru2_0);
console.log("soru2_1; "+soru2_1);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
var soru3_0 = new Date('1/1/1990');
var soru3_1 = soru3_0.getDate();
soru3_0.setDate(soru3_1-1);
console.log("soru3:"+soru3_0);

// İki tarih arasındaki geçen zamanı bulunuz.
var soru4_start = new Date('8/26/1979');
var soru4_end = new Date('10/13/2021');
var milisaniye = soru4_end - soru4_start;
var saniye = milisaniye / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;
var ay = gun / 30;
var yil = ay / 12;

console.log('milisaniye: '+milisaniye);
console.log('saniye: '+ saniye);
console.log('dakika: '+ dakika);
console.log('saat: '+ saat);
console.log('gün: '+ gun);
console.log('ay: '+ ay);
console.log('yıl: '+ yil);

// Her yıl mayıs ayının ikinci haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?
let annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2021);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log('anneler gunu: ' + annelerGunu);

// Yaş hesaplama nasıl yapılır.
var birthday = new Date('02/12/2003');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 2003);