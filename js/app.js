var stickyAnchorTop = 0;

$(document).ready(function() {
  stickyAnchorTop = $('#sticky-anchor').offset().top;
})

function sticky() {
  var window_top = $(window).scrollTop();
  console.log(window_top + ' - ' + stickyAnchorTop);
  
  if (window_top > stickyAnchorTop) {
    $('#sticky-anchor').addClass('stick');
  } else {
    $('#sticky-anchor').removeClass('stick');
  }
}

$(function() {
  $(window).scroll(sticky);
  sticky();
});