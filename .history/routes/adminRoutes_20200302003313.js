const express = require('express'),
Blog = require('../models/blogModel'),
passport = require("passport"),
router = express.Router(),
User= require('../models/userModel');



router.get("/admin", (req,res)=>{
    res.render("./admin/admin.ejs")
});

router.post("/admin", (req,res)=>{
    console.log(req.body.data);
    const title = req.body.data.blogTitle;
    const comSentence = req.body.data.comSentence;
    const comImage = req.body.data.comImage;
    const blog = req.body.data.blog;

    const newBlog = {title:title, comSentence:comSentence, comImage:comImage,blog:blog};

    Blog.create(newBlog).then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
        res.redirect
    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    });
});

router.get("/testing", (req,res) => {
    Blog.find().then((foundBlogs)=> {
        res.json(foundBlogs);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    });
});

router.get('./blogs/:blogId',(req,res)=>{
    Blog.findById(req.params.blogId).then((foundBlog)=>{

        res.render("./blog/showBlog", {foundBlog:foundBlog});

    })
    .catch((err)=>{
        console.log("Errorrrrrr");
        console.log(err);
        res.send(err);
    })
})

router.get("/signin", (req,res)=>{
    res.render("./admin/signin.ejs")
});

router.post("/signin", (req,res)=>{

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req,res, function(){
                res.redirect("/admin")
            });
        }

    })


});

router.get("/signup", (req,res)=>{
    res.render("./admin/signup.ejs")
});

router.post("/signup", (req,res)=>{
 User.register({username: req.body.username}, req.body.password, function(err,user){
     if(err){
         console.log(err);
         res.redirect("/signup");
     }else{
         passport.authenticate("local")(req,res,function(){
             res.redirect("/admin");
         });
     }
 });

});





module.exports=router;