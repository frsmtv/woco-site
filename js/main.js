  $(document).ready(function(){

  // ADD FADEIN TO ELEMENTS
  $('body').addClass('animated fadeIn');
  $('section').addClass('animated fadeIn');
  $('#teaser').addClass('animated fadeIn');
  $('#social').addClass('animated fadeInLeft');

  // MAIN MENU ACTIVE CLASS
  $('#main-nav a').click(function(){
    $(this).addClass('active');
    $('#main-nav a').not(this).removeClass('active');
    });

    // NAV REDUCE ON SCROLL
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            // $('header').fadeIn();
            $('#main-nav a').css('font-size', '.5rem');
            $('#logo').css('width', '100px');

        } else {
            // $('header').fadeOut();
            $('#main-nav a').css('font-size', '');
            $('#logo').css('width', '');
        }
    });

  // SCROLL TO
  $("#hommage").click(function() {
    $('html, body').animate({
        scrollTop: $("#hommage").offset().top
    }, 2000);
  });

  // MUSICIENS ANIMATIONS
  // $('article.musicien').mouseover(function(){
  //   $('article.musicien').not(this).css('opacity', '.2');
  // });

  // $('article.musicien').mouseleave(function(){
  //   $('article.musicien').not(this).css('opacity', '');
  // });

  $('article.musicien').click(function(){
    $('article.musicien').not(this).css('visibility', 'hidden');
    $(this).find('div.musicien-card').fadeIn();
  });

  

  // $('article.musicien').mouseleave(function(){
  //   $('div.musicien-card').fadeOut();
  //   $('article.musicien').css('visibility', 'visible');
  // });  

  // $('div.musicien-card').mouseleave(function(){
  //   $(this).fadeOut();
  //   $('article.musicien').css('visibility', 'visible');

  // });

  // $('span.back').click(function(){
  //   $(this).parent().fadeOut();
  // });

  // RELLAX
  // Center all the things!
  var rellax = new Rellax('.rellax', {
    center: true
  });

  // SCROLLA
  $('.animate').scrolla();

});
