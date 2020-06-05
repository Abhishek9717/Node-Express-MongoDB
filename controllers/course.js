const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const courseModel = mongoose.model("Course");


router.get("/add",(req,res)=>{
    res.render("add-course");
})


router.post("/add",(req,res)=>{ 
    console.log("Inside Post ")
    var Course = new courseModel();
    Course.courseName = req.body.courseName;
    Course.courseDuration = req.body.courseDuration;
    Course.courseFee = req.body.courseFee;
    Course.courseId = Math.ceil(Math.random()*10000) + "";
    Course.save((err,docs)=>{
        if(!err){
            //res.json({message:"successful", status:"OK"});
            res.redirect("/course/list");
        }
        else{
            res.send("Failed to add course");
        }
    });
})

router.get("/list",(req,res)=>{
    
    courseModel.find((err,docs)=>{
        if(!err){
            console.log(docs);
            //res.send("Course Controller");
            res.render("list", { data : docs })
        }
        else{
            res.send("Failed to connect to the database");
        }
    })
   
});

module.exports = router;