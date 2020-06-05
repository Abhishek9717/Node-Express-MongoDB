const express = require("express");
const path = require("path")
const Handlebars = require('handlebars')
const expressHandleBars = require("express-handlebars")
const bodyParser = require("body-parser")
const courseController = require("./controllers/course")
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express();

app.use(bodyParser.urlencoded({
    extended : true
}))

app.set('views',path.join(__dirname,"/views"))

app.engine("hbs",expressHandleBars({
    extname:"hbs", 
    defaultLayout:"mainLayout",
    layoutsDir : __dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set("view engine","hbs");

app.get("/",(req,res)=>{
    //res.send("<h1>Hello Mongo</h1>")
    res.render("index",{});
})

app.use("/course",courseController);

app.listen(3000, (err)=>{
    if(!err){
        console.log("Server Started")
    }
})