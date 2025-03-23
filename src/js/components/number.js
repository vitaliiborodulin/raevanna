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