function sticky() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  console.log(window_top);
  console.log(div_top);
  if (window_top > div_top) {
    $('#language').addClass('stick');
  } else {
    $('#language').removeClass('stick');
  }
}

$(function() {
  $(window).scroll(sticky);
  sticky();
});