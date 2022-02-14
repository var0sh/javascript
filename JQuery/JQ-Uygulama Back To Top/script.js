$(function(){

    $(window).scroll(function () { 
        if($(window).scrollTop() > 110){
            $('#backToTop').fadeIn('slow');
        }else{
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function (e) { 
        e.preventDefault(); // bunun yerine return: false; da kullanılabilir
        $('html, body').animate({
            scrollTop: 0
        }, 700)
        // return false; //****<a> etiketinin görevi sayfayı bir linke göndermek ancak bizim amacımız bir başka linke gitmek değil dolayısıyla a etiketine tıklandığında istediğimiz işlemi yap ancak a etiketinin yapmak istediği başka bir sayfaya yönlendirme işlemini yapma demek istiyoruz eğer a etiketi yerine button etiketi kullanırsanız return false demeniz gerekmez
    });

})