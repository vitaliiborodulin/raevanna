$('.home__hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // speed: 500,
    // arrows: false,
    cssEase: 'linear',
    fade: true,
    nextArrow: $('.home__hero .slider__arrow-next'),
    prevArrow: $('.home__hero .slider__arrow-prev'),
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false
});

$('.card__image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    // speed: 500,
    arrows: false,
    // cssEase: 'linear',
    dots: true,
    fade: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 834,
            settings: {
                dots: false,
            }
        },
    ]
});

$('.card__image').on('mouseenter', '.slick-dots button', function() {
    $(this).parents('.card__image').slick('slickGoTo', $(this).parent().index());
});

// feedback slider
$('.feedback__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // infinite: true,
    // speed: 500,
    // arrows: false,
    nextArrow: $('.feedback .slider__arrow-next'),
    prevArrow: $('.feedback .slider__arrow-prev'),
    // cssEase: 'linear',
    // dots: true,
    // fade: true,
    // autoplay: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 834,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// abouthistory
const historySlider = $('.history__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    touchMove:false,
    // speed: 2000,
    arrows: false,
    adaptiveHeight: true,
    // nextArrow: $('.feedback .slider__arrow-next'),
    // prevArrow: $('.feedback .slider__arrow-prev'),
    cssEase: 'linear',
    dots: false,
    // fade: true,
    // autoplay: false,
    // swipeToSlide: true,
    // waitForAnimate: true,
    responsive: [
        {
            breakpoint: 834,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.history').on('wheel', function(e) {
    // e.preventDefault();
  
    if (e.originalEvent.deltaY > 0) {
        historySlider.slick('slickNext');
    } else {
        historySlider.slick('slickPrev');
    }
    // return false;
});

// product main slider
$('.product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    asNavFor: '.product__navs'
});

$('.product__navs').slick({
    slidesToShow: 3,
    asNavFor: '.product__slider',
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    infinite: false,
    prevArrow: '<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5L5 2L8 5" stroke="#E479BD" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    nextArrow: '<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L5 7L2 4" stroke="#E479BD" stroke-linecap="round" stroke-linejoin="round"/></svg>',
});

// product more slider
$('.product__more-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    // speed: 500,
    // arrows: false,
    nextArrow: $('.product__more .slider__arrow-next'),
    prevArrow: $('.product__more .slider__arrow-prev'),
    // cssEase: 'linear',
    // dots: true,
    // fade: true,
    // autoplay: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    responsive: [
        {
            breakpoint: 834,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
