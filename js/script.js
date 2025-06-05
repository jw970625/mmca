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

  /* display________________________________________________ */
  let bannerWidth= $("#index .ban ul li").width()+130,
      $img = $("#index .display_sec .ban ul li a"),
      $btn = $("#index .display_sec .banner .disp_indicator a"),
      oldImgIndicator=0,
      newImgIndicator=0,
      count = $img.length;

  $("#index .ban ul li:last").prependTo(".ban ul");
  $("#index .ban ul").css({"left":-bannerWidth+"px"});

  //indicator 전환효과 함수
  function changeImg(newImg){ 
    if(oldImgIndicator != newImg){
      $btn.eq(oldImgIndicator).removeClass("active");
      $btn.eq(newImgIndicator).addClass("active");
    }
    oldImgIndicator = newImgIndicator;
  };

  function bannerAuto(){
    $("#index .ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $("#index .ban ul li:first-child").appendTo(".ban ul"); 
      $(this).css({left:-bannerWidth+"px"}); 
    });
    newImgIndicator++;
    if(newImgIndicator>count-1){ 
      newImgIndicator=0;
    }
    changeImg(newImgIndicator);
  };

  bannerTimer = setInterval(bannerAuto,4000);

  //이전보기
  $("#index .ban_btn .ban_left").click(function(){
    $("#index .ban ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){
      $("#index .ban ul li:last-child").prependTo("#index .ban ul");
      $(this).css({left:-bannerWidth+"px"});
    });

    newImgIndicator--;
    if(newImgIndicator<0){ 
      newImgIndicator=count-1;
    }
    changeImg(newImgIndicator);
  });

  //다음보기
  $("#index .ban_btn .ban_right").click(function(){
    $("#index .ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $("#index .ban ul li:first-child").appendTo("#index .ban ul");
      $(this).css({left:-bannerWidth+"px"});
    });

    newImgIndicator++;
    if(newImgIndicator>count-1){ 
      newImgIndicator=0;
    }
    changeImg(newImgIndicator);
  });

  //마우스오버시 멈춤
  $("#index .display_sec").hover(function(){ 
    clearInterval(bannerTimer);
  },function(){
    bannerTimer = setInterval(bannerAuto,4000);
  });

  





  /* intro1____________________________________________ */



  /* intro2____________________________________________ */




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


/* Collection___________________________________________________ */
const container = document.querySelector('#index .collection_sec .col_slide');
const prev = document.querySelector('#index .collection_sec .prev');
const next = document.querySelector('#index .collection_sec .next');

next.addEventListener('click',()=>{
  const slides = document.querySelectorAll('#index .collection_sec .slide');
  container.append(slides[0]);
});
prev.addEventListener('click',()=>{
  const slides = document.querySelectorAll('#index .collection_sec .slide');
  container.prepend(slides[slides.length-1]);
});
  
