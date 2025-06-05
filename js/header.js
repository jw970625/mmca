/* Desktop Header */
$(document).ready(function () {

  $(".sub").hide();
  $(".bg_box").hide();

  $(".main").mouseenter(function () {
    $(this).find(".sub").stop().slideDown(200);
    $(".bg_box").stop().slideDown(200);
  });
  
  $(".main").mouseleave(function () {
    $(this).find(".sub").stop().slideUp(200);
    $(".bg_box").stop().slideUp(200);
  });
});

/* Tab Header */
$(".trigger").click(function () {
  const $menu = $(".menu_all");

  if ($menu.hasClass("active")) {
    $menu.stop(true, true).animate({ right: "-100%" });
    $menu.removeClass("active");
  } else {
    
    $menu.stop(true, true).animate({ right: "0" });
    $menu.addClass("active");
  }
  $(".tmain").click(function(){
    $(this).siblings().find(".tsub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".tsub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");
  });
});

  
