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

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$('.two-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
});
