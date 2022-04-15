$(document).ready(function () {
  $('.bxslider').bxSlider({
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
    speed: 2000,

    onSliderLoad: function () {
      $('.bxslider > li').eq(0).addClass('active-slide');
    },

    onSlideBefore: function ($slideElement) {
      $('.bxslider > li').removeClass('active-slide');
      $slideElement.addClass('active-slide');
    },
  });
});
