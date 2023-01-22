//document.querySelector("button").addEventListener("click", handleClick);

var numberBtn = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberBtn; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    });
}
