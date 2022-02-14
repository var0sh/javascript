// Single Elements > document.getElementById() yada document.querySelector()
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// val.style.color='#ff0';
// val.innerText='furkan';
// val.innerHTML='<b>furkan</b>';

// console.log(val);


let val;

val = document.querySelector('#header');
val = document.querySelector('.card-header');
val = document.querySelector('h1');
val = document.querySelector('li:last-child').style.color='red';
val = document.querySelector('li:nth-child(3)').style.color = 'yellow';
val = document.querySelector('li:nth-child(1)').classList.add('active');


console.log(val);