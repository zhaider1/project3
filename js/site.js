$('html').addClass('js').removeClass('no-js');
$.noConflict

(function($) {
  var music = new Audio('images/Spooky.mp3');

  function play() {
    music.play();
  }
  
})
