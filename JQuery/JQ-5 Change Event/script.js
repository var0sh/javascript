$(function(){

   $('.control').change(function (e) { 
      e.preventDefault();
      console.log($(this).val());   
   });
})