const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("main.ejs")
});

router.get("/", (req,res)=>{
    res.render("video.ejs")
});


module.exports=router;