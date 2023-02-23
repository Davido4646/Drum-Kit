document.querySelectorAll("button")[0].addEventListener("click", function() {
  var audio =new Audio("sounds/crash.mp3");
  audio.play();
});
document.querySelectorAll("button")[1].addEventListener("click", function() {
  var audio =new Audio("sounds/kick-bass.mp3");
  audio.play();
});
document.querySelectorAll("button")[2].addEventListener("click", function() {
  var audio =new Audio("sounds/snare.mp3");
  audio.play();
});
document.querySelectorAll("button")[3].addEventListener("click", function() {
  var audio =new Audio("sounds/tom-1.mp3");
  audio.play();
});
document.querySelectorAll("button")[4].addEventListener("click",function() {
  var audio =new Audio("sounds/tom-2.mp3");
  audio.play();
});
document.querySelectorAll("button")[5].addEventListener("click",function() {
  var audio =new Audio("sounds/tom-3.mp3");
  audio.play();


});
document.querySelectorAll("button")[6].addEventListener("click", function() {
  var audio =new Audio("sounds/tom-4.mp3");
  audio.play();

  classList.add("clicked");
  setTimeout(function() {
  classList.remove("clicked");
}, 100);
});



document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
    var audio =new Audio("sounds/crash.mp3");
    audio.play();
  break;

  case "a":
  var audio =new Audio("sounds/kick-bass.mp3");
  audio.play();
break;

case "s":
var audio =new Audio("sounds/snare.mp3");
audio.play();
break;

case "d":
var audio =new Audio("sounds/tom-1.mp3");
audio.play();
break;

case "j":
var audio =new Audio("sounds/tom-2.mp3");
audio.play();
break;

case "k":
var audio =new Audio("sounds/tom-3.mp3");
audio.play();
break;

case "l":
var audio =new Audio("sounds/tom-4.mp3");
audio.play();
break;
    default:

  }
}
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}
