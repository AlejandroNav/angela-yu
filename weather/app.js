const express = require("express");

const app = express();

const https = require('node:https');

app.get("/",function (req,res) {
    const url1 =  "https://api.open-meteo.com/v1/forecast?latitude=19.00&longitude=-99.00&current_weather=true"
    https.get(url1,function (response) {
        response.on("data", function (data) {
            const waeData = JSON.parse(data)
            console.log(waeData); 
            res.write('<h1> La temperatura en CDMX es de ' + waeData.current_weather.temperature + " grados Centigrados </h1>")
            res.write('<h3> El clima es ' + waeData.current_weather.weathercode + " del codigo </h3>")
            res.send()
        })
    });
})

app.listen(3001,function () {
    console.log("funciona el server en 3001");
})
