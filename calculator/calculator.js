const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function (req,res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (requ,res) {
    console.log(requ.body);
    var num1 = parseInt(requ.body.numero1) 
    var num2 = parseInt(requ.body.numero2) 
    var suma = num1 + num2;
    res.send("Hola estamos escuchando tu post request la suma es  "+suma);
})
app.listen(4000,function() {
    console.log("escucha correctamente a node en el 4000  ");
});