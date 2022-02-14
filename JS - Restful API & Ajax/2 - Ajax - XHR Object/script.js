// Asynchronous Javascript And XML => AJAX
// AJAX => AJAX objesi web sayfalarını yenilemeden arka planda veri gönderme ve veri alma işlemleri için kullanılır.
// AJAX istekleri XMLHttpRequest() ile yapılır.

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => { // .onreadystatechange() => Durum her değiştiğinde tetiklenir.
    if(xhr.readyState === 4){ // .readyState => AJAX işlem durumunu kontrol eder. İstek başlatılmadığında readyState özelliği '0', açıldığında '1', istek gönderildiğinde '2', yüklendiğinde '3' ve tamamlandığında '4' değerini alır.
        if(xhr.status === 200){
            console.log(xhr.response); // .responseText => İşlem sonucunda dönen değerler response, responseText, responseXML(gelen yanıtı belge olarak döndürür) ile alınır.
        }else if(xhr.status === 404){
            console.log('kaynak bulunamadı..');
        }
    }
}

xhr.onprogress = () =>{
    console.log('on progressing');
}

xhr.open('GET', 'msg.txt', true); // .open() => AJAX isteği açmak için kullanılır. AJAX isteği sırasında XMLHttpsRequest() objesine ait olaylar(onloadstart, onloadend, onerror, ...) tetiklenir.
xhr.send(); // .send() => AJAX isteğini başlatır.

console.log(`hello`);

/*

readyState :

    0: request not initialized
    1: server connection established
    2: request received 
    3: processing request 
    4: request finished and response is ready


status :

    200: "OK"
    403: "Forbidden"
    404: "Not Found"

*/