function whatToSay() {
  var word = document.getElementById('what_to_say').value;
  if( word != null) {
    responsiveVoice.speak(word, "Spanish Latin American Female");
  }
}

window.onload = function(e){
  document.getElementById("what_to_say").addEventListener("keydown", function(e) {
      // Enter is pressed
      if (e.keyCode == 13) { whatToSay(); }
  }, false);
}
