$(document).ready(function(){

  // ADD FADEIN TO ELEMENTS
  $('body').addClass('animated fadeIn');
  $('section').addClass('animated fadeIn');
  $('#teaser').addClass('animated fadeIn');
  $('#social').addClass('animated fadeInLeft');

  // MAIN MENU ACTIVE CLASS
  $('#main-nav a').click(function(){
    $(this).addClass('active');
    $('#main-nav a').not($(this)).removeClass('active');
    });

    // NAV REDUCE ON SCROLL
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#main-nav a').css('font-size', '.6rem');
            $('#logo').css('width', '100px');

        } else {
            $('#main-nav a').css('font-size', '');
            $('#logo').css('width', '');
        }
    });

  // SCROLLA
  $('.animate').scrolla();

  // STELLAR JS

  // SCROLL TO
  $("#hommage").click(function() {
    $('html, body').animate({
        scrollTop: $("#hommage").offset().top
    }, 2000);
  });

});
