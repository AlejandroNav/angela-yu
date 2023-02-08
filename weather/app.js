const express = require("express");
const https = require('node:https');

const app = express();

app.use(express.urlencoded({ extended: true})); 

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html")
})
app.post("/", function(req,res) {
    const lat = req.body.latitude1
    const long = req.body.longitude2
    const url1 =  "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&current_weather=true"
    https.get(url1,function (response) {
        response.on("data", function (data) {
            const waeData = JSON.parse(data)
            res.write("<h1> La temperatura en "+long+","+lat +' es de ' + waeData.current_weather.temperature + " grados Centigrados </h1>")
            res.write('<h3> El clima es ' + waeData.current_weather.weathercode + " del codigo </h3>")
            res.send()
        })
    }); 
    
})


app.listen(3001,function () {
    console.log("funciona el server en 3001");
})
