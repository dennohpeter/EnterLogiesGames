
jQuery(window).load(function(){
  jQuery(".hameid-loader-overlay").fadeOut(500);
});

$(document).ready(function () {

  $('.smooth').click(function () {
    var target = $(this.hash);

    $.sidr('close', 'sidr');
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 900);
  });
});

