for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    takeAKey (buttonInnerHTML)
    buttonAnimation (buttonInnerHTML);
    });
}


document.addEventListener("keydown", function(event) {
  takeAKey (event.key);
  buttonAnimation (event.key);
});


function takeAKey (key) {
  switch(key) {
    case "w":
      var audio = new Audio("../Drum Kit/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("../Drum Kit/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("../Drum Kit/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("../Drum Kit/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("../Drum Kit/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("../Drum Kit/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("../Drum Kit/sounds/tom-4.mp3");
      audio.play();
      break;
    default:
  }
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
