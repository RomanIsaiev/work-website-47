import $ from 'jquery';

$('.question').click(function () {
  $(this).find('.content').toggle(200); //скрытие, показ ответа
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});

$('.question-two').click(function () {
  $(this).find('.content-two').toggle(200); //скрытие, показ ответа
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});
