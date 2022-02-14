// Multiple Elements > document.getElementsByClassName() yada document.getElementsByTagName yada document.querySelectorAll()

let val;
// val = document.getElementsByClassName('list-group-item');
// val[1].style.color = 'red';
// val[2].textContent = 'new İtem';

// for (let i = 0; i < val.length; i++) {
//     console.log(val[i].style.color = 'yellow');
// }


// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');


// val = document.querySelectorAll('li');
// val.forEach(function(item, index){
//     item.textContent = `${index} - Hello`;
// });


val = document.querySelectorAll('li:nth-child(odd)');
val.forEach(function(item) {
    item.style.background = 'gray';
})

console.log(val);