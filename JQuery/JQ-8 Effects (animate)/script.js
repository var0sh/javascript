$(function(){

   $('#animate').click(function (e) { 
      e.preventDefault();
      $('#box').animate({
         left: '200px',
         width: '300px'
      }, 2000, function(){
         alert('animasyon bitti')
      })      
      $('#box').animate({
         fontSize: '30px'
      }, 3000, function(){
         alert(`font'a css uygulandı`)
      })
   });

})