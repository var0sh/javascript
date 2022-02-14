// **removing element (element silme)
const taskList = document.querySelector('#task-list');
//taskList.remove();
//taskList.childNodes[8].remove();
//taskList.children[3].remove();
//taskList.removeChild(taskList.childNodes[7]);
//taskList.removeChild(taskList.children[3]);



// **removing attribute
//taskList.children[0].removeAttribute('class');
// for (let i = 0; i < taskList.children.length; i++) {
//     taskList.children[i].removeAttribute('class');
// };

//console.log(taskList);



// **replaceing elements (element güncelleme)
// const cardHeader = document.querySelector('.card-header');

// create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class', 'card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2, cardHeader);

// console.log(cardHeader);



// **classes

let val;

link = taskList.children[0].children[0];

// val = link.className; // className classları string bir ifade olarak getirir
// val = link.classList; // classList ise classları bir dize içerisinde sıralayarak getirir
//val = link.classList[0];
link.classList.add('new');
link.classList.remove('new');

val = link.getAttribute('href');

val = link.hasAttribute('href'); // hasAttribute metodu sayesinde attribute varmı yokmu  kontrol edebiliriz.

console.log(val);