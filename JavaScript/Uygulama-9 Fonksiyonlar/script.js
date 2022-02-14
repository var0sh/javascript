let hesapA = {
    ad: 'Furkan Akçatepe',
    hesapNo: '1234567',
    bakiye: 2000,
    ekHesap: 1000
};
let hesapB = {
    ad: 'Ayşe Akçatepe',
    hesapNo: '12345678',
    bakiye: 3000,
    ekHesap: 2000
};

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye >= miktar) {
        console.log(`Paranızı alabilirsiniz.`);
        hesap.bakiye -= miktar;
    }else{
        var toplam = hesap.bakiye + hesap.ekHesap;
        if (toplam >= miktar) {
            if (confirm(`Ek hesabınızı kullanmak istermisiniz?`)) {
                console.log(`Paranızı alabilirsiniz.`);

                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekhesap

            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log(`Üzgünüz, bakiye yetersiz.`);
        }
    }
}

paraCek(hesapA, 2000);
paraCek(hesapA, 999);
console.log(hesapA.bakiye);