$(function(){

   $('#hide').click(function (e) { 
      e.preventDefault();
      $('p').hide('fast', function(){
         $('#hide').css('display', 'none');
         $('#show').css('display', 'inline-block');
      }) //** .hide(), .show(), .toggle() metotları ikinci parametre alırlar. buraya bir fonksiyon yazılıp efekt bittikten sonra ne olacağını söyleyebilir
   });

   $('#show').click(function (e) { 
      e.preventDefault();
      $('p').show('slow', function(){
         $('#show').css('display', 'none');
         $('#hide').css('display', 'inline-block');
      })
   });
   $('#toggle').click(function (e) { 
      e.preventDefault();
      $('p').toggle(1000);
   });

})