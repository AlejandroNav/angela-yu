function ranDice() {
    return "images/" + "dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
}
var rand1 = ranDice()
var rand2 = ranDice()

document.querySelectorAll("img")[0].setAttribute("src",rand1)
document.querySelectorAll("img")[1].setAttribute("src",rand2)

if (rand1>rand2) {
    document.querySelector("h1").innerHTML="X Player 1 wins!"
} else if (rand1<rand2){
    document.querySelector("h1").innerHTML="  Player 2 wins! X"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}


