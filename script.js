$(document).ready(function() {
  
    $(window).scroll(function () {
      console.log($(window).scrollTop())
      if ($(window).scrollTop() > 0) {
        console.log('buttom');
        $('#nav').addClass('on-scroll-position');
        $('#menu').addClass('on-scroll-switch');
        $('#button').addClass('on-scroll-button');
      }
      if ($(window).scrollTop() < 1) {
        console.log('top')
        $('#nav').removeClass('on-scroll-position');
        $('#menu').removeClass('on-scroll-switch');
        $('#button').removeClass('on-scroll-button');
      }
    });
  });