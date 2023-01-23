//document.querySelector("button").addEventListener("click", handleClick);

var numberBtn = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberBtn; index++) {
    document
    .querySelectorAll(".drum")[index].addEventListener("click", function () {
        var pressedKey = this.innerHTML;
        console.log(pressedKey);
        switch (pressedKey) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
        default:
            break;
        }
    });
}
