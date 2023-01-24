//document.querySelector("button").addEventListener("click", handleClick);

var numberBtn = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberBtn; index++) {
    document
    .querySelectorAll(".drum")[index].addEventListener("click", function () {
        var pressedKey = this.innerHTML;
        makeSound(pressedKey)
    });
}
addEventListener ("keydown",function(evt){
    makeSound(evt.key)
})

function makeSound(pressedKey) {

    switch (pressedKey) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'a':
            var audio2 = new Audio("sounds/kick-bass.mp3");
        audio2.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
        audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
            break;
        default:
            break;
    }
}