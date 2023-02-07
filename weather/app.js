const express = require("express");

const app = express();


app.get("/",function (req,res) {
    res.send("server is up and runnign")
})

app.listen(3001,function () {
    console.log("funciona el server en 3001");
})