$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
$('.two-time').slick({
  slidesToShow: 1,
  infinite: true,
  speed: 300,
  dots: false,
  centerMode: true,
  adaptiveHeight: true,
});
