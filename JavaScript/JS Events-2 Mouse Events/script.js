const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// function eventHandler(event) {
//     console.log(`event type : ${event.type}`);
//     event.preventDefault();
// }

// **double click
// btn.addEventListener('dblclick', eventDouble);

// function eventDouble(event) {
//     console.log(`event type: ${event.type}`);
// };


// **mousedown
// btn.addEventListener('mousedown', eventMouseDown);

// function eventMouseDown(event) {
//     console.log(`event type: ${event.type}`);
// };

// **mouseup
// btn.addEventListener('mouseup', eventMouseUp);

// function eventMouseUp(event) {
//     console.log(`event type: ${event.type}`);
// }

// **mouseenter
// ul.addEventListener('mouseenter', eventMouseEnter);

// function eventMouseEnter(event) {
//     console.log(`event type: ${event.type}`);
// };

// **mouseleave
// ul.addEventListener('mouseleave', eventMouseLeave);

// function eventMouseLeave(event) {
//     console.log(`event type: ${event.type}`);
// };

// **mouseover > mouseenter ile farkı şu: ul nesnesine mouse ile geldiğimizde çalışır fakat ul nesnesinin altındaki bir elemana mesela a tag'ına geldiğimizde mouseout olur yani ul den çıkar ardından mouseover olur yani a tag'ına geldiğimizi söyler
// ul.addEventListener('mouseover', eventMouseOver);

// function eventMouseOver(event) {
//     console.log(`event type: ${event.type}`);
// };

// // **mouseout
// ul.addEventListener('mouseout', eventMouseOut);

// function eventMouseOut(event) {
//     console.log(`event type: ${event.type}`);
// };

// **mousemove > nesne içerisinde ki koordinatları yazdırır. > offsetX x koordinatı, offsetY y koordinatını çekmek için
ul.addEventListener('mousemove', eventMouseMove);

function eventMouseMove(event) {
    console.log(`event type: ${event.type}`);
    const h5 = document.querySelector('#ul-title');
    h5.textContent = `Mouse X: ${event.offsetX}   Mouse Y: ${event.offsetY}`;
}