

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.doodle-container').height($(window).height () - $('.doodle-container').offset ().top);
    $('.doodle-container').width($('.doodle-container').parent().width());
  }); // end of document ready

  /* scroll's efect */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        var NAV_SIZE = 50
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - NAV_SIZE
          }, 500, 'swing');
          return false;
        }
      }
    });
  });

})(jQuery); // end of jQuery name space
