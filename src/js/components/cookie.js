// let showCookie = getCookie('show_cookie');
// if(showCookie != 'no'){

    const cookieDialog = $('.cookie');
        
    setTimeout(function(){
        cookieDialog.show();
    }, 2000);

    const cookieAcceptBtn = $('.cookie__agree');
    const cookieCloseBtn = $('.cookie__close');

    cookieCloseBtn.on('click', function(){
        cookieDialog.hide();
        // createCookie('show_cookie', 'no', '365');
    });

    cookieAcceptBtn.on('click', function(){
        cookieDialog.hide();
        // createCookie('show_cookie', 'no', '365');
    });

// }