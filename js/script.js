// $(function() {
//        $('.nav li a').click(function() {
//           $('.nav li').removeClass();
//           $($(this).attr('href')).addClass('active');
//        });
//     });
   $(document).ready(function(){
     $(".toggle-mnu").click(function(){
      $(this).toggleClass("on");
       $(".top_nav").slideToggle();
     })
   })