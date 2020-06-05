const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Edureka",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log("Failed to connect");
    }
})

const Course = require("./course.model");