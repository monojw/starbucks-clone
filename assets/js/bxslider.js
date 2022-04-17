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
    infiniteLoop: true,
    speed: 500,
    prevSelector: '.prev-btn',
    nextSelector: '.next-btn',
    pagerCustcom: '.pager',

    /* 슬라이드 로드되자마자 실행 */
    onSliderLoad: function (currentIndex) {
      // 기존의 스타일을 모두 지운다.
      $('.bxslider > li').removeClass('active-slide');
      $('.bx-pager-item a').removeClass('active');

      // 첫 번째 <li>의 스타일을 만든다.
      $('.bxslider > li[aria-hidden=false]').addClass('active-slide');

      // 처음 pager dot의 스타일을 만든다.
      $('.bx-pager-item a').eq(currentIndex).addClass('active');

      // start 버튼을 숨긴다.
      $('.bx-start').hide();

      // stop 버튼을 보여준다.
      $('.bx-stop').show();
    },

    /* 슬라이드가 전환되기전 실행 */
    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
      $('.bxslider > li').removeClass('active-slide'); // 기존 <li> 클래스를 지우고
      $slideElement.addClass('active-slide'); // 다음 <li> 클래스 지정한다.

      $('.bx-pager-item a').eq(oldIndex).removeClass('active'); // 이전 pager dot의 스타일을 없애고
      $('.bx-pager-item a').eq(newIndex).addClass('active'); // 다음 pager dot의 스타일을 만든다.
    },
  });

  /* 리로드 이벤트 */
  $('.prom-btn').click(function () {
    if ($('.promotion').css('display') === 'block') {
      bxSlider.reloadSlider();
    }
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

    let current = $(e.currentTarget);
    let i = parseInt(current.attr('data-slide-index'));
    if ($(this).attr('data-slide-index') !== undefined) {
      bxSlider.goToSlide(i);
    }
  });

  /* stop버튼 클릭시 이벤트 */
  $('.bx-stop').click(function (e) {
    e.preventDefault();

    bxSlider.stopAuto();
    $('.bx-stop').hide();
    $('.bx-start').show();
    return false;
  });

  /* start버튼 클릭시 이벤트 */
  $('.bx-start').click(function (e) {
    e.preventDefault();

    bxSlider.startAuto();
    $('.bx-start').hide();
    $('.bx-stop').show();
    return false;
  });

  $('.bx-start').hide();
});
