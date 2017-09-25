window.onload = function(e){

  //create a synth and connect it to the master output (your speakers)
  var synth = new Tone.Synth().toMaster();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");

  onOrientationChange();
  // Get a reference to the first <img> element on the page

  var imageElem = document.getElementsByTagName('img')[0],


  resetOrientation = function(e){
    console.log('eeeeeee weee');
    var alpha = 0,
        beta = 0,
        gamma = 0;

        // Rotate the <img> element in 3 axes according to the device’s orientation

      imageElem.style.webkitTransform = 'rotateZ(' + alpha + 'deg) rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg)';

  }
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
  document.getElementById('reset-gravity').addEventListener('mousedown', resetOrientation, false);
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