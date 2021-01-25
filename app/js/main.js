$(function () {
    $('.slider__inner').slick({
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