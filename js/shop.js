$(document).ready(function(){

  let fadeContainer = $(".fade"),
      fadeImage = fadeContainer.find(".fade_items ul li"),
      fadeIndicator = fadeContainer.find(".fade_indicator a"),
      fadePrev = fadeContainer.find(".fade_side .prev"),
      fadeNext = fadeContainer.find(".fade_side .next"),
      oldidx = 0,
      idx=0,
      fadeCount = fadeImage.length, 
      interval = 4000;

  function fadeAni(idx){ 
    if(oldidx != idx){
      fadeIndicator.eq(oldidx).removeClass("active");
      fadeIndicator.eq(idx).addClass("active");
      fadeImage.eq(oldidx).stop().fadeOut("400");
      fadeImage.eq(idx).stop().fadeIn("400");
    };
    oldidx = idx;
  };

  function fadeAuto(){
    fadeTimer = setInterval(function(){
      idx = (oldidx + 1) % fadeCount;
      fadeAni(idx);
    },interval);
  };
  fadeAuto();

  //Indicator(하단버튼)
  fadeIndicator.click(function(){
    idx = $(this).index();
    fadeAni(idx);
  });

  //좌우버튼
  fadePrev.click(function(){
    idx--;
    if(idx < 0){ 
      idx = fadeCount-1;됨
    }
    fadeAni(idx);
  });
  fadeNext.click(function(){
    idx++;
    if(idx > fadeCount-1){
      idx=0; 
    }
    fadeAni(idx);
  });

  fadeContainer.mouseenter(function(){
    clearInterval(fadeTimer);
  })
  .mouseleave(function(){
    fadeAuto();
  });
});

