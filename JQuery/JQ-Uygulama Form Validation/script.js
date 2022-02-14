//form validation > bir formda form elemanlarının istemediğimiz şekil de doldurulduğun da verdiğimiz hata mesajları


  $(function(){

    function isEmail(email) {
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }

    $('#btn').click(function (e) { 
        e.preventDefault();
        var errorMessage = '';
        $('#error').html('');

        if(isEmail($('#email').val()) == false){
            errorMessage += '<p>Email alanı düzgün girilmedi</p>'
        }
        if($('#email').val() === ''){
            errorMessage += '<p>Email zorunlu alan</p>'
        }
        if($('#phone').val() === ''){
            errorMessage += '<p>Telefon zorunlu alan</p>'
        }
        if($.isNumeric($('#phone').val()) === false){
            errorMessage += '<p>Telefon düzgün girilmedi</p>'
        }
        if($('#password').val() === ''){
            errorMessage += '<p>Şifre zorunlu alan</p>'
        }
        if($('#password').val() != $('#repassword').val()){
            errorMessage += '<p>Şifreler eşleşmiyor</p>'
        }

        if(errorMessage != ''){
            $('#error').html(errorMessage);
        }

    });



})