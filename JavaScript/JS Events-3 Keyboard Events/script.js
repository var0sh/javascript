const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

// **input event
// input.addEventListener('keydown', eventHandler); // klavye tuşuna bastığımız an çalışır
// input.addEventListener('keyup', eventHandler); // klavye tuşuna basıp bıraktığımız an çalışır
// input.addEventListener('keypress', eventHandler); // basılı tuttuğumuz zaman boyunca çalışır
// input.addEventListener('focus', eventHandler); // label'a yazı yazmak için geldiğimiz an çalışır
// input.addEventListener('blur', eventHandler); // label'dan çıktığımız an çalışır
// input.addEventListener('cut', eventHandler);
// input.addEventListener('paste', eventHandler);
// input.addEventListener('copy', eventHandler);
input.addEventListener('select', eventHandler);

// **form event
// form.addEventListener('submit', eventHandler);

// **select
select.addEventListener('change', eventHandler);

function eventHandler(event) {
    console.log(`event type: ${event.type}`);
    // console.log(`key code: ${event.keyCode}`); // keyCode ile basılan tuşun key code'unu çekip consola yazdırıyor
    // console.log(`value: ${event.target.value}`); // target.value ile hangi tuşa bastığımız yazar
    event.target.style.backgroundColor = 'gray';
    event.preventDefault();
};