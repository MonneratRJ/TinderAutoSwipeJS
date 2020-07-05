// Check what aria-label your languate button has, in PT-BR is "Curti"... so we used that. Use F12, devtools inspector to do so.
var button = document.querySelector('[aria-label="Curti"]');

// Function to start the loop with 666 miliseconds time (you can change if you want)
var loop = setInterval(function(){ button.click(); }, 666);

// Use this command to stop the function.
clearInterval(loop);
