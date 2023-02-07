const express = require("express");

const app = express();

const https = require('node:https');

app.get("/",function (req,res) {
    const url1 =  "https://api.open-meteo.com/v1/forecast?latitude=23.00&longitude=-102.00&current_weather=true"
    https.get(url1,function (response) {
        response.on("data", function (data) {
            const waeData = JSON.parse(data)
            console.log(waeData.current_weather.temperature); 
        })
    });
    res.send("server is up and runnign")
})

app.listen(3001,function () {
    console.log("funciona el server en 3001");
})
