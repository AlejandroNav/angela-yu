//document.querySelector("button").addEventListener("click", handleClick);

var numberBtn = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberBtn; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        alert(index+1)
    });
}