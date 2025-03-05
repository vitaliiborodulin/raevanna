$(function() {

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
    

});