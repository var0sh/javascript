$(function(){
   // **Slide Metotları
   $('#slideDown').click(function (e) { 
      e.preventDefault();
      $('.p1').slideDown(1000, function(){
         $('#slideDown').css('display', 'none');
         $('#slideUp').css('display', 'inline-block');
      });
   });

   $('#slideUp').click(function (e) { 
      e.preventDefault();
      $('.p1').slideUp(1000, function(){
         $('#slideUp').css('display', 'none');
         $('#slideDown').css('display', 'inline-block');
      });
   });

   $('#slideToggle').click(function (e) { 
      e.preventDefault();
      $('.p1').slideToggle(1000);
   });





   // Fade Metotları
   $('#fadeIn').click(function (e) { 
      e.preventDefault();
      $('.p2').fadeIn(1000, function(){
         $('#fadeIn').css('display', 'none');
         $('#fadeOut').css('display', 'inline-block');
      });
   });

   $('#fadeOut').click(function (e) { 
      e.preventDefault();
      $('.p2').fadeOut(1000, function(){
         $('#fadeOut').css('display', 'none');
         $('#fadeIn').css('display', 'inline-block');
      });
   });

   $('#fadeToggle').click(function (e) { 
      e.preventDefault();
      $('.p2').fadeToggle(1000);
   });

   $('#fadeTo').click(function (e) { 
      e.preventDefault();
      $('.p2').fadeTo(1000, 0.5); // **.fadeTo() > istediğimiz opaziteye kadar indirebiliyoruz ama element hala ekranda yer kaplamaya devam eder
   });
})