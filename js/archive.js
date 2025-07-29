$(function() {
  const $imageContainer = $('.image-container');

  $imageContainer.on('mousewheel', function(event) {
    event.preventDefault();
    const scrollAmount = event.deltaY * -50; 
    $(this).stop().animate({
      scrollLeft: $(this).scrollLeft() + scrollAmount
    }, 300);
  });


  const $fadeElements = $('.art-sec');


  function checkScrollFade() {
    const windowHeight = $(window).height(); 
    const scrollTop = $(window).scrollTop();

    $fadeElements.each(function() {
      const $this = $(this);

      if ($this.data('is-visible')) {
        return true; // continue
      }

      const elementOffset = $this.offset().top;
      const elementHeight = $this.outerHeight();


      const revealPoint = elementOffset - (windowHeight * 0.8);
      const fullyVisiblePoint = elementOffset;

      if (scrollTop > revealPoint && scrollTop < fullyVisiblePoint) {
        const opacity = (scrollTop - revealPoint) / (fullyVisiblePoint - revealPoint);
        $this.css('opacity', opacity);
        $this.css('transform', `translateY(${50 * (1 - opacity)}px)`);
      } else if (scrollTop >= fullyVisiblePoint) {
        // 요소가 완전히 화면에 나타나면 투명도를 1로 설정합니다.
        $this.css('opacity', 1);
        $this.css('transform', 'translateY(0)');
        $this.data('is-visible', true); // 완전히 나타났음을 표시
      } else {
        // 요소가 아직 화면에 나타나지 않았다면 투명도를 0으로 설정하고 초기 위치로
        $this.css('opacity', 0);
        $this.css('transform', 'translateY(50px)');
      }
    });
  }


  $(window).on('scroll', checkScrollFade);
});

let throttleTimer = null;
const throttleDelay = 10;

throttleTimer = setTimeout(() => {
  checkScrollFade();
  throttleTimer =null;
}, throttleDelay);

  checkScrollFade();

// checkScrollFade 함수 내부에 추가 (디버깅용)
// console.log('scrollTop:', scrollTop);
// console.log('elementOffset:', elementOffset);
// console.log('revealPoint:', revealPoint);
// console.log('fullyVisiblePoint:', fullyVisiblePoint);
// console.log('calculated opacity for', $this[0], ':', opacity);