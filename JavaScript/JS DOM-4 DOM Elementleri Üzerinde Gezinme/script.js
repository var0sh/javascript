let val;

let list = document.querySelector('.list-group');
val = list;
val = list.childNodes; // Konsolda NodeList olarak görüntülenir. Konsolda karşımıza çıkan NodeList elemanlarından text(text node) elementi taglar arasında boşluk olduğunu bize bildirir.
// val = list.children; // Konsolda HTML Collection olarak görüntülenir.  
val = list.childNodes[0];
val = list.childNodes[1].nodeType; // Element eğer ki bir tag ise 1, attribute ise 2, text node ise 3, yorum satırı ise 8 değerini döndürür.

val = list.children[2].textContent = 'New Item';
val = list.children[3].childNodes;

val = list.firstChild; // Bu şekilde kullanırsak text node'lar da işin içine katılır ve bize ilk eleman olarak text döndürür
val = list.firstElementChild; // Bu şekilde kullanırsak ise text node'lar işin içine karışmaz ve listenin ilk li'si gelir

val = list.childElementCount; // Listenin altında kaç tane element olduğunu  söyler.

val = list.parentNode; // Listenin kapsayıcısını gösterir.
val = list.parentElement.parentElement;

val = list.children[0].nextSibling; // listenin elemanlarından indexi 0 olanın bir sonraki elemanını gösterir
val = list.children[0].nextElementSibling; // eğer bu şekilde kullanırsak text node'ları es geçer ve bir sonraki elemente yani li ye gider.
val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
 
console.log(val);

console.log('**********************************************');

for (let i = 0; i < list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 3) {
        console.log(list.childNodes[i]);
    }
};
console.log(list.childNodes.length); // 9

console.log('**********************************************');

for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
};
console.log(list.children.length); // 4