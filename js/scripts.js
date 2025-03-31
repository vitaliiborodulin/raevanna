$(function() {

    // burger
    const burger = $('.burger');
    const menu = $('.header__menu');
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger-close');
        menu.toggleClass('open').toggle(300);
        $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            menu.removeClass('open');
            burger.removeClass('burger-close');
            $('html, body').removeClass('overflow');
        }
    });
    
    
    // submenu
    $('.header__menu .menu-item-has-children > a').on('click', function(e) {
    	e.preventDefault();
    });
    
    var submenu =  $('.header__menu .sub-menu');
    var menuChildren = $('.header__menu .menu-item-has-children');
    
    
    menuChildren.on('click', function() {
    	
    	if ($(this).hasClass('active')){
    			$(this).removeClass('active');
    			$(this).find('.sub-menu').removeClass('open').slideUp();
    	} else {
                menuChildren.removeClass('active');
                menuChildren.find('.sub-menu').removeClass('open').hide()
    			$(this).addClass('active');
    			$(this).find('.sub-menu').addClass('open').slideDown();
    	}
    	// $(this).find('.sub-menu').toggleClass('open').slideToggle();
    });
    
    $(document).on('click', function (e) {
     
    	if (!$('.header__menu .menu-item-has-children a').is(e.target) ){
    			menuChildren.removeClass('active');
    			submenu.removeClass('open').hide();
    	}
    
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    // $('input[name="birth"]').mask("99.99.9999");
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
    
    
    $('.filter-btn').on('click', function () {
        const filter = $('.filter');
    
        if (!filter.hasClass('active')){
            filter.addClass('active');
            filter.slideDown(300);
        } else {
            filter.removeClass('active');
            filter.slideUp(300);
        }
    });
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
    $('.history__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        speed: 4000,
        arrows: false,
        adaptiveHeight: true,
        // nextArrow: $('.feedback .slider__arrow-next'),
        // prevArrow: $('.feedback .slider__arrow-prev'),
        cssEase: 'linear',
        // dots: true,
        // fade: true,
        // autoplay: false,
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
    
    // $('.history__slider').on('wheel', (function(e) {
    //     e.preventDefault();
      
    //     if (e.originalEvent.deltaY < 0) {
    //       $(this).slick('slickPrev');
    
    //     } else {
    //       $(this).slick('slickNext');
    
    //     }
    // }));
    
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
    // $("input[type=date]").flatpickr();
    $(".form__date").flatpickr({
        locale: "ru",
        dateFormat: "d.m.Y",
        // minDate: "today",
        // defaultDate: ["today"],
        disableMobile: "true"
    });
    
    $(".form__time").flatpickr({
        locale: "ru",
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        // minTime: "09:00",
        // maxTime: "22:30",
        // defaultDate: "13:45"
        disableMobile: "true"
    });
    // $('.card__video').on('mouseenter', 'video', function(event) {
    //     $(this).get(0).play();
    //     $(this).parent().addClass('play');
    // });
    
    // $('.card__video').on('mouseleave', 'video', function(event) {
    //     $(this).get(0).pause();
    // });
    
    $('.card__video').on('click', 'video', function() {
        this.paused ? this.play() : this.pause();
        this.paused ? $(this).parent().removeClass('play') : $(this).parent().addClass('play');
    });
    // $('[data-fancybox]').fancybox({
    //     // thumbs : { autoStart:true },
    //     toolbar: "auto",
    //     infobar: true,
    //     smallBtn: "auto",
    //     protect: true,
    //     loop: true,
    //     iframe : {
    //         preload : false
    //     }
    // });
    
    $('.popup-link').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        },
        closeExisting : true
    });
    
    // $('#sendback .popup-link').on('click', function(){
        
    // });
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
    // $('.amount input').on('input change paste', function() {
    //     $(this).val(this.value.replace(/[^0-9]/, ''));
    // });
      
      $('.amount .nc').on('click', function() {
        var input = $(this).closest('.amount').find('input');
        var value = parseInt(input.val()) || 1;
        if ($(this).hasClass('nc-minus')) {
          value = value - 1;
            if(value<=0){
                value = 1;
            }
        }
        if ($(this).hasClass('nc-plus')) {
          value = value + 1;
        }
        input.val(value + ' шт.').change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
    });

});