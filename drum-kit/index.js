<<<<<<< Updated upstream
//document.querySelector("button").addEventListener("click", handleClick);

var numberBtn = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberBtn; index++) {
    document
    .querySelectorAll(".drum")[index].addEventListener("click", function () {
        var pressedKey = this.innerHTML;
        makeSound(pressedKey)
        animation(pressedKey)
    });
}
addEventListener ("keydown",function(evt){
    makeSound(evt.key)
    animation(evt.key)
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

function animation(currentKey) {
    var activeBtn = document.querySelector("."+currentKey)
    activeBtn.classList.add("pressed")
    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    },200)
    
}

let notes = document.querySelectorAll(".drum").length;







for (let i = 0; i < notes; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML
        switch (buttonInnerHTML) {
            case "a":
                var musi = new Audio("sounds/tom-1.mp3");
                musi.play();
                break;
            case "s":
                var musi = new Audio("sounds/tom-2.mp3");
                musi.play();      
                break;         
                
            case "d":
                    var musi = new Audio("sounds/tom-3.mp3");
                    musi.play();
                    break;
            case "w":
                    var musi = new Audio("sounds/tom-4.mp3");
                    musi.play();    
                    break;    
            case "j":
                var musi = new Audio("sounds/snare.mp3");
                musi.play();      
                break;         
                
            case "k":
                    var musi = new Audio("sounds/crash.mp3");
                    musi.play();
                    break;
            case "l":
                    var musi = new Audio("sounds/kick-bass.mp3");
                    musi.play();    
                    break;                
            default:
                console.log(buttonInnerHTML);
                break;
        }
    });

}

function handleClick() {
    var musi = new Audio("sounds/tom-1.mp3");
    musi.play();
}

>>>>>>> Stashed changes
