function yasHesapla(dogumYili){
      return 2021 - dogumYili;
};
let val = yasHesapla(2003);
console.log(val);

function emeklilikHesapla(dogumYili, isim){
      let yas = yasHesapla(dogumYili);
      let emeklilik = 65 - yas;

      if (emeklilik > 0) {
            console.log(`${isim}, yaşın ${yas} ve emekli olmana ${emeklilik} yıl var.`);
      }else{
            console.log(`${isim} , zaten emeklisin.`);
      };
};

emeklilikHesapla(1900, 'Furkan');