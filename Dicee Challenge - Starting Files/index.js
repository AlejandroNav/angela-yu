document.querySelectorAll("img")[0].setAttribute("src",ranDice())
document.querySelectorAll("img")[1].setAttribute("src",ranDice())

function ranDice() {
    return "images/" + "dice" + (Math.floor(Math.random() * 6) + 1) + ".png";;
}
