console.log($('ul').text());
$('h3').text('java');

function adSoyad(){
    var ad = $("#ad").val();
    var soyad = $("#soyad").val();
    $('#soyad').removeClass('green');
    $('#ad').toggleClass('highlight'); // ** .toggleClass() > belirttiğimiz class mevcut ise silinir mevcut değil ise eklenir 
    console.log('Adınız Soyadınız: ' + ad + ' ' + soyad);
    $('img').hide(); // .hide() > ekranda saklar | .show() > ekranda gösterir
};

$('img').attr('width', '200'); // ** .attr() > bir etikete attribute eklemek için kullanılır