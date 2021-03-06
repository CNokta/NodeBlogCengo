//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//AppRoutes

const indexRoutes = require("./routes/indexRoutes");

//AppConfig
app.use(express.static("public"))

app.listen(3001, function(){

console.log("Server started on port 3000")

});

//RoutesUsing

app.use(indexRoutes);



const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CengoDB", {useNewUrlParser:true});




// article.save();
