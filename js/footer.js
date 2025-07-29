$(document).ready(function(){

  $(".title_footer").click(function(){
    $(this).toggleClass("active");
    $(".sub-navi_footer").slideToggle(50);
  });

});