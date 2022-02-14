var sentence = '  Template Literals or template strings is the ability Have multi-line strings without any funny business.  ';
var word = '  Template Literals or template strings is the ability Have multi-line strings without any funny business.  ';
var url = 'http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye';

// cümle kaç karakterdir
//sentence = sentence.length;

// cümle kaç kelimeden oluşuyor
//console.log('kaç kelime var: '+ word.trim().split(' ').length);

// tüm cümleyi küçük harfe çevirin
//sentence = sentence.toLowerCase();

// cümlenin başındaki ve sonundaki boşlukları siliniz
//sentence = sentence.trim();

// '-' karakterini silin
//sentence = sentence.replace('-','');

// url nin içinden str kısmını çıkarınız
//var str = 'http://';
//console.log('str silinmiş hali: '+ url.substr(str.length));

// url hangi protokolü kullanmaktadır (http), (https)
console.log('http: '+url.startsWith('http'));
console.log('https: '+url.startsWith('https'));

// url içinde .com varmı
console.log('.com index: '+url.indexOf('.com'));
console.log('.com içeriyormu: '+ url.includes('.com'));

// url ifadesini geçerli bir url ye çeviriniz
console.log(url.toLowerCase()
               .replace(/ /g, '-')
               .replace(/ı/g, 'i')
);