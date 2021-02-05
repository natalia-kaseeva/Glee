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

  // $('.menu__btn, .menu a').on('click', function () {
  //   $('.header__inner').toggleClass('header__inner--active');
  // });

  $('.menu__burger, .menu a').on('click', function () {
     $('.menu__burger, .menu__list').toggleClass('active');
     $('body').toggleClass('lock');
  });

  $('.filter__button, .filter__menu button').on('click', function () {
    $('ul.filter__menu').toggleClass('filter__menu--active');
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