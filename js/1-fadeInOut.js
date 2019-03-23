$(document).ready(function () {

  // This code will slowly fade out the element selected in the time specified inside the parentheses of
  // of ".fadeOut()", then the rest of the html elments will occupy the space left by the faded out element;
  $(".red-box").fadeOut(2000);
  $(".red-box").fadeIn(); // This fades in the element;
  $(".red-box").fadeTo(1000, .5); // Fade to a certain opacity in after the specified time;

  $(".red-box").fadeTo(1000, .2);
  $(".green-box").fadeTo(1000, .5);
  $(".blue-box").fadeTo(1000, .8);


  $(".blue-box").fadeToggle(); 
  $(".blue-box").fadeToggle(); // Since the opacity was .8 before the toggle, after it toggles again it will remain such opacity.

  // If you want to keep the space of the element on the webpage, use the "fadeTo(1000, 0)" function and values
  // this way the style of the element is set to opacity: 0, which means it is a transparent element.


});