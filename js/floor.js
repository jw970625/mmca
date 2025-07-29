$(".floor li").click(function(){
  let tabResult = $(this).attr("data-alt"); 
  $(".floor li").removeClass("active");
  $(this).addClass("active");

  $(".floor_img > div").removeClass("active");
  $("#" + tabResult).addClass("active");
});