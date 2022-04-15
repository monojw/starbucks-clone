$(document).ready(function () {
  const a = $('.bxslider').bxSlider({
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
    speed: 700,
    prevSelector: '.prev-btn',
    nextSelector: '.next-btn',

    onSliderLoad: function () {
      $('.bxslider > li').eq(0).addClass('active-slide');
    },

    onSlideBefore: function ($slideElement) {
      $('.bxslider > li').removeClass('active-slide');
      $slideElement.addClass('active-slide');
    },
  });

  $('.prev-btn').click(function () {
    a.goToPrevSlide();
    return false;
  });

  $('.next-btn').click(function () {
    a.goToNextSlide();
    return false;
  });
});
