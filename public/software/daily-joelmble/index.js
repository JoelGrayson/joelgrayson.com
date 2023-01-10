// Store the status of the image. Initially it is 'visible'.
var isVisible = "visible";

function blink(){
  setTimeout(function(){document.getElementById("sign").style.visibility="hidden"
  document.getElementById("sign").style.height="0"
  document.body.style.zoom = "170%" }, 7500);
}
