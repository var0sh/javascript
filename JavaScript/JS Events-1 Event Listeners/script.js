const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask'); 

// **burada fonksiyonu addEventListener'in bir parametresi olarak tanımladık
// btn.addEventListener('click', function () {
//     console.log(`btn click`);
// });


// **burada ise metot dışında tanımlanmış olan bir fonksiyonu metot ile ilişkilendiriyoruz
// btn2.addEventListener('click', btnClick('btn2'));
// btn.addEventListener('click', btnClick('btn'));
// function btnClick(name) {
//     console.log(`btn clicked ${name}`);
// }


// **preventDefault metodu sayesinde a tag'i linklerine tıkladığımızda sayfa başa dönerek refresh olmaz
btn.addEventListener('mouseover', function(e) {
    let val;

    val = e;
    val = e.target; // target özelliği ile hangi butona tıkladığımızın bilgisi consol'a yazılır
    val = e.target.id;
    val = e.type;

    console.log(val);

    e.preventDefault();
})