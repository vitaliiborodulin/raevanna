$(function() {

    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    $('input[name="birth"]').mask("99.99.9999");
    $('.accordion__item:first-child').find('.accordion__header').addClass('active');
    $('.accordion__item:first-child').find('.accordion__body').show();
    
    $('.accordion__header').on('click', function () {
        const accBody = $(this).next();
    
        if (!$(this).hasClass('active')){
            $('.accordion__header').removeClass('active');
            $('.accordion__body').slideUp(300);
            $(this).addClass('active');
            accBody.slideDown(300);
        } else {
            $(this).removeClass('active');
            accBody.slideUp(300);
        }
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
    
    $('.card__image').on('mouseenter', '.slick-dots button', function(event) {
        $(this).parents('.card__image').slick('slickGoTo', $(this).parent().index());
    });
    $('[data-fancybox]').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        }
    });
    var arrowUpBtn = $('.btn-up');
    
    // function scrollBtn() {
    //     var top = $(this).scrollTop();
    
    //     if (top > 300) {
    //         arrowUpBtn.stop().fadeIn();
    //     } else {
    //         arrowUpBtn.stop().fadeOut();
    //     }
    //     // $(this).scrollTop() > 300 ? $('.arrowUpBtn').fadeIn() : $('.arrowUpBtn').fadeOut();
    // }
    
    // scrollBtn();
    
    // $(window).on('scroll', scrollBtn);
    
    arrowUpBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

});