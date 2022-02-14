const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// **bubbling > container içerisinde card var, card itemine tıkladığımız zaman consol da hem card'a hemde container'a tıkladığımız bilgisi yazar. bunu engellemek için .stopPropagation() metodunu kullanıyoruz
// form.addEventListener('click', function (event) {
//     console.log(`form`);
//     event.stopPropagation();
// });
// cardBody.addEventListener('click', function (event) {
//     console.log(`cardBody`);
//     event.stopPropagation();
// });
// card.addEventListener('click', function (event) {
//     console.log(`card`);
//     event.stopPropagation();
// });
// container.addEventListener('click', function (event) {
//     console.log(`container`);
//     event.stopPropagation();
// });

// **capturing > addEventListener() üçüncü parametre olarak true yada false alır. eğer bunu true yaparsak click olayı gerçekleştiği zaman formdan container'a doğru consol'a yazdırmak yerine dıştan içe yani container'dan form'a doğru console'a yazdırır
// form.addEventListener('click', function (event) {
//     console.log(`form`);
// }, true);
// cardBody.addEventListener('click', function (event) {
//     console.log(`cardBody`);
// }, true);
// card.addEventListener('click', function (event) {
//     console.log(`card`);
// }. true);
// container.addEventListener('click', function (event) {
//     console.log(`container`);
// }, true);

// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function (item) {
//     item.addEventListener('click', function (event) {
//         console.log(event.target);
//         event.preventDefault();
//     })
// });

const ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    if (event.target.className === 'fas fa-times') {
        event.target.parentElement.parentElement.remove();
        console.log(`list item delete`);
    }
    event.preventDefault();
})