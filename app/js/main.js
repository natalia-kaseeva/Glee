$(function () {
    $('.slider__inner').slick({
        dots: true,
        arrows: false
    });

    // $('.partners-slider__inner').slick({
    //     arrows:false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    // });

    // $('.products__cards').mixitup({
    //     selectors: {
    //         filter: '.product__filter-btns'
    //     }
    // });

    // $('.design__cards').mixitup({
    //     selectors: {
    //         filter: '.design__filter-btns'
    //     }
    // });

    // var mixer1 = mixitup('.products__cards', {
    //     selectors: {
    //         filter: '.product__filter-btns'
    //     }
    // });

    var mixer = mixitup('.products__cards');
    //var mixer2 = mixitup('.design__cards');
});