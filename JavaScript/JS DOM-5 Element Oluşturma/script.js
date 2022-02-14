// **create element
const li = document.createElement('li');

// add class
li.className = 'list-group-item list-group-item-secondary';

// add attribute
li.setAttribute('title', 'new item');

// add text node
const text = document.createTextNode('new item');
li.appendChild(text); // appendChild ile text'in li'nin bir alt elemanı(children) olduğunu söylüyoruz.

const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-right';
a.innerHTML = '<i class = "fas fa-times"></i>';

li.appendChild(a);

document.querySelector('.list-group-item:nth-child(1)').setAttribute('id','li-1');
document.querySelector('.list-group-item:nth-child(2)').setAttribute('id','li-2');
document.querySelector('.list-group-item:nth-child(3)').setAttribute('id','li-3');
document.querySelector('.list-group-item:nth-child(4)').setAttribute('id','li-4');
var liste = document.querySelector('.list-group');

// ****insertBefore ile elementimizi en sona eklemek yerine istediğimiz yere ekleyebiliriz
var li3 = document.querySelector('#li-3'); // li3'ü insertBefore ile ekleme yaparken hangi elementten önce ekleyeceğimizi belirtmek için oluşturduk
liste.insertBefore(li, li3);

console.log(liste);
