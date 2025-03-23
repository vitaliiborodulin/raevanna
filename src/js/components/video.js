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
