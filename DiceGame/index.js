
function randy() {
    return Math.floor(Math.random()*6) + 1;
}
var numb1 =randy();
var numb2 =randy();
var rand1 = "images/dice" +numb1+".png";
var rand2 = "images/dice" +numb2+".png";

var imagen1 = document.querySelectorAll("img")[0]
var imagen2 = document.querySelectorAll("img")[1]

imagen1.setAttribute("src",rand1)
imagen2.setAttribute("src",rand2)

if (numb1 > numb2) {
    document.querySelector("h1").innerHTML = "𓀔 Ganador 1"
} 
else if (numb1 < numb2) {
    document.querySelector("h1").innerHTML = "Ganador 2 𓀔"
}
else {
    document.querySelector("h1").innerHTML = "Empate 🛵"
}