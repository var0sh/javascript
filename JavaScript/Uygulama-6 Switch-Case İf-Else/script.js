// Uygulama 1

var trafigeCikis = new Date('12/30/2018');
var trafiktekiMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun = Math.floor(trafiktekiMs / (1000*60*60*24)); 

if (trafiktekiGun >= 0 && trafiktekiGun <= 365) {
    console.log(`1. araç bakımınızın zamanı gelmiştir.`);
}else if(trafiktekiGun > 365 && trafiktekiGun <= 365*2){
    console.log(`2. araç bakımınızın zamanı gelmiştir.`);
}else if(trafiktekiGun > 365*2 && trafiktekiGun <= 365*3){
    console.log(`3. araç bakımınızın zamanı gelmiştir.`);
}else{
    console.log(`BİLİNMEYEN HATA!!!`);
}

console.log(trafiktekiGun);


// Uygulama 2

var girilenDeger = prompt('orada kim var?');

if (girilenDeger === 'cancel') {
    console.log(`cancelled`);
}else if(girilenDeger === 'admin'){
    console.log(`welcome to admin`);
    var adminGiris = prompt('pasaport lütfen');
    if (adminGiris == 'cancel') {
        console.log(`cancelled`);
    }else if(adminGiris == 'TheMaster'){
        console.log(`Welcome!`);
    }else{
        console.log(`yanlış pasaport`);
    }
}else{
    console.log(`tanıyamadım`);
}