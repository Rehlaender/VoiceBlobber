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

  onOrientationChange();
  // Get a reference to the first <img> element on the page

  var imageElem = document.getElementsByTagName('img')[0],

  // Create an event handler function for processing the device orientation event
      handleOrientationEvent = function(e) {

          // Get the orientation of the device in 3 axes, known as alpha, beta, and gamma,
          // represented in degrees from the initial orientation of the device on load

          var alpha = e.alpha,
              beta = e.beta,
              gamma = e.gamma;

          // Rotate the <img> element in 3 axes according to the device’s orientation

          imageElem.style.webkitTransform = 'rotateZ(' + alpha + 'deg) rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg)';
      };
  // Listen for changes to the device orientation using the gyroscope and fire the event
  // handler accordingly

  window.addEventListener('deviceorientation', handleOrientationEvent, false);

  // Reference page elements for dropping current device acceleration values into

  var accElem = document.getElementById('acceleration'),
      accGravityElem = document.getElementById('acceleration-gravity'),

  // Define an event handler function for processing the device’s acceleration values

      handleDeviceMotionEvent = function(e) {

          // Get the current acceleration values in 3 axes and find the greatest of these

          var acc = e.acceleration,
              maxAcc = Math.max(acc.x, acc.y, acc.z),

          // Get the acceleration values including gravity and find the greatest of these

              accGravity = e.accelerationIncludingGravity,
              maxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);

          // Output to the user the greatest current acceleration value in any axis, as
          // well as the greatest value in any axis including the effect of gravity

          accElem.innerHTML = 'Current acceleration: ' + maxAcc +  'm/s^2';
          accGravityElem.innerHTML = 'Value incl. gravity: ' + maxAccGravity + 'm/s^2';
      };

  // Assign the event handler function to execute when the device is moving

  window.addEventListener('devicemotion', handleDeviceMotionEvent, false);

}

// Define an event handler function to execute when the device orientation changes

var onOrientationChange = function() {

	// The device is in portrait orientation if the device is held at 0 or 180 degrees
	// The device is in landscape orientation if the device is at 90 or -90 degrees

	var isPortrait = window.orientation % 180 === 0;

	// Set the class of the <body> tag according to the orientation of the device

	document.body.className = isPortrait ? 'portrait' : 'landscape';
  console.log(isPortrait, '¿¿¿ wea');
  document.getElementById("orientationInput").value = isPortrait;
}

// Execute the event handler function when the browser tells us the device has
// changed orientation

window.addEventListener('orientationchange', onOrientationChange, false);

// Execute the same function on page load to set the initial <body> class
