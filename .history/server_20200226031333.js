//jshint esversion:6
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local"),
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//AppRoutes

const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");


//AppConfig
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CengoDB", {useNewUrlParser:true});
app.use(express.static("public"))

app.listen(3001, function(){

console.log("Server started on port 3000")

});

//RoutesUsing

app.use(indexRoutes);
app.use(adminRoutes)



// article.save();
