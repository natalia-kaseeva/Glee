$(function(){
    $('.slider__inner').slick({
        dots:true,
        arrows:false
        // customPaging : function(slider, i) {
        //     var thumb = $(slider.$slides[i]).data();
        //     return '<a>'+i+'</a>';
        //     or
        //     return '<a>'+(i+1)+'</a>';
        //     },
    });

    var mixer = mixitup('.product__cards');
});