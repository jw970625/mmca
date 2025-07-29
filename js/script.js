$(document).ready(function(){

  /* Visual_____________________ */
  let fadeContainer = $("main"),
      fadeImage = fadeContainer.find(".visuals ul li"),
      fadeIndicator = fadeContainer.find(".indicator a")
      fadePrev = fadeContainer.find(".visual-btn .prev"),
      fadeNext = fadeContainer.find(".visual-btn .next"),
      oldidx = 0,
      idx = 0,
      fadeCount = fadeImage.length, 
      interval = 4000; 

  function fadeAni(idx){
    if(oldidx != idx){      
      fadeIndicator.eq(oldidx).removeClass("active"); 
      fadeIndicator.eq(idx).addClass("active");
      fadeImage.eq(oldidx).stop().fadeOut("300");
      fadeImage.eq(idx).stop().fadeIn("300");
    };
    oldidx = idx;
  };

  function fadeAuto(){
    fadeTimer = setInterval(function(){
      idx = (oldidx + 1) % fadeCount;
      fadeAni(idx);
    }, interval);
  };
  fadeAuto();

  //Indicator
  fadeIndicator.click(function(){
    idx = $(this).index();
    fadeAni(idx);
    clearInterval(fadeTimer);
    fadeAuto();
  });

  /* intro3____________________________________________ */
  $("#intro3 .faq p").hide();
  $("#intro3 .faq .question").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
    $(this).next(".faq p").slideToggle().siblings("#intro3 .faq p:visible").toggle();
  });

  $("#intro3 .tab li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    let tabResult = $(this).attr("data-alt");
    $("#intro3 .panel li").removeClass("active");
    $("#"+tabResult).addClass("active").hide().fadeIn();
  });

});
