$('html').addClass('js').removeClass('no-js');
$.noConflict

(function($) {
  var song = new Audio('images/Spooky.mp3');

  function play() {
    song.play();
  }
  $('#song').remove();

  $('#spook').onclick(play);

  $(document).keypress(function(e) {
    if(e.keyCode === 32) {
      if(song.paused === true) {
        song.play();
      }
      else {
        song.pause();
      }
      }
    }
  }


})(jQuery);
