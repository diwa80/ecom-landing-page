 // service carousel
 $('.slick-carousel').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  //centerMode: true,
  // variableWidth: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
      }
  }, {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  }, {
      breakpoint: 575,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }]
});
