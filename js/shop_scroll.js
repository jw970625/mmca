$(document).ready(function(){

  let ani = $(".ani");

  //mainEffect
  visual();

  function visual(){
    const visuSlider = $('.visual .visual_slider li');
    const visuNav = $('.visual_nav li');
    const visuLength =visuSlider.length-1;

    first();
    setInterval(slideEvent, 5000);

    function first(){
      visuSlider.eq(0).addClass("On");
      visuNav.eq(0).addClass("active");
    };

    //이미지전환 함수
    function slideEvent(){
      let i = $('.visual_slider li.On').index(); 

      reset();

      if(i < visuLength){
        visuSlider.eq(i+1).addClass("On");
      };
      if(i==visuLength){
        i=0
        visuSlider.eq(i).addClass('On');
      };
    };

    visuNav.click(function(){
      let i = $(this).index();

      reset();
      $(this).addClass("active");
      visuSlider.eq(i).addClass("On");
    });

    function reset(){
      visuSlider.removeClass("On");
      visuNav.removeClass("active");  
    };
  };

  //Scroll
  $.fn.scrollMoving = function(){
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + (this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return (viewportTop < elementBottom) && (elementTop < viewportBottom);
  };

  $(window).on("load scroll",function(){

    ani.each(function(){
      if($(this).scrollMoving()){
        $(this).addClass("moving");
      }
      // else{
      //   $(this).removeClass("moving");
      // }
    });
  });

  // historyAnimation
  $(".tab li").click(function(){
    let tabNum = $(this).index();
    let tabMove = 70*tabNum;
    $(".tab-header").animate({top:tabMove});
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let tabResult = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+tabResult).addClass("active");
  });

  //eventButtonEffect
  $(".port-list ul li").slice(0,3).show();

  $(".load-more").click(function(){
    $(".port-list ul li:hidden").slice(0,3).fadeIn();
    if($('.port-list ul li:hidden').length == 0) {
      $(this).hide()
    }
  });


});