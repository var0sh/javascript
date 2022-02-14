// *****.ready() > tarayıcımıza bu metot içerisindeki kodların sayfa tamamen yüklendikten sonra çalışacak olduğunu bildiriyoruz 
// $(document).ready(function(){

// }); bu şekildede kullanılabilir yada şu şekilde de:

$(function () {
   $('#p1').click(function () {
    $(this).addClass('paragrafRenklendir');  //** buradaki this p1'i ifade ediyor
   })
});

//$(this).addClass('paragrafRenklendir');