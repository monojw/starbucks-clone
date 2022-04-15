$(document).ready(function () {
  const bxSlider = $('.bxslider').bxSlider({
    auto: true,
    stopAutoOnClick: false,
    slideWidth: 600,
    maxSlides: 5,
    adaptiveHeight: true,
    pager: false,
    controls: false,
    autoControls: false,
    autoStart: true,
    infiniteLoop: false,
    speed: 700,
    prevSelector: '.prev-btn',
    nextSelector: '.next-btn',
    pagerCustcom: '.pager',

    /* 슬라이드 로드되자마자 실행 */
    onSliderLoad: function () {
      $('.bxslider > li').eq(0).addClass('active-slide'); // 첫 번째 <li> 클래스 지정한다.
    },

    /* 슬라이드가 전환되기전 실행 */
    onSlideBefore: function ($slideElement) {
      $('.bxslider > li').removeClass('active-slide'); // 기존 <li> 클래스를 지우고
      $slideElement.addClass('active-slide'); // 다음 <li> 클래스 지정한다.
    },
  });

  /* prev버튼 클릭시 이벤트 */
  $('.prev-btn').click(function () {
    bxSlider.goToPrevSlide(); // 이전 슬라이드로 이동한다.
    return false;
  });

  /* next버튼 클릭시 이벤트 */
  $('.next-btn').click(function () {
    bxSlider.goToNextSlide(); // 다음 슬라이드로 이동한다.

    return false;
  });

  /* pager버튼 클릭시 이벤트 */
  $('.pager a').click(function (e) {
    e.preventDefault();

    /*  let current = $(e.currentTarget);
    let i = parseInt(current.attr('data-slide-index'));
    if ($(this).attr('data-slide-index') !== undefined) {
      bxSlider.goToSlide(i);
    } */
  });
});
