const express = require("express");

const app = express();

app.get("/",function (req,res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

app.listen(4000,function() {
    console.log(__dirname);
    console.log("escucha correctamente a node en el 4000  ");
});