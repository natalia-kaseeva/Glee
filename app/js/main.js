$(function () {
  $('.products-slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.partners-slider__inner').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 1,
    onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    }, 
    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    }
  });

  $('.menu__burger, .menu a').on('click', function () {
    $('.menu__burger, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.filter__button, .filter__menu button').on('click', function () {
    $('ul.filter__menu').toggleClass('filter__menu--active');
  });

  $('.card-recent__star').rateYo({
    starWidth: "10px",
    spacing: "8px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  var containerEl1 = $('[data-ref="container-1"]');
  var containerEl2 = $('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});