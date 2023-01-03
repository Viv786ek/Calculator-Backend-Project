//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = num1 + num2;

    res.send("The result of the calculation is" + result);
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});
