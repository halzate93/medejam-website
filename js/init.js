(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.doodle-container').height($(window).height () - $('.doodle-container').offset ().top);
    $('.doodle-container').width($('.doodle-container').parent().width());
  }); // end of document ready


})(jQuery); // end of jQuery name space
