//Carousel Start
$(document).ready(function () {
  $(".fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: "div",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
//Carousel End
