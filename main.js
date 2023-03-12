//To give instruction on page//
window.alert("Use Keyboard Arrow keys to move the pacman around the screen");

//Moving the Pac-Man at the bottom of the screen//
var x = 0;
var y = 0;
var speed = 5;

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) { // left arrow key
    x -= speed;
  } else if (event.keyCode === 38) { // up arrow key
    y -= speed;
  } else if (event.keyCode === 39) { // right arrow key
    x += speed;
  } else if (event.keyCode === 40) { // down arrow key
    y += speed;
  }

  document.getElementById('pacman').style.left = x + 'px';
  document.getElementById('pacman').style.top = y + 'px';
  
  // Having music//
  var audio = document.getElementById("audio");
  audio.play();
  audio.loop = true;
});
