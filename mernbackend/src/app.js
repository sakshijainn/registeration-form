const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 3000;



const static_path = path.join(__dirname ,  "../public");
// console.log(path.join(__dirname ,  "../public"));

const template_path = path.join(__dirname ,  "../template/views");
const partials_path = path.join(__dirname ,  "../template/partials");


app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    // res.send("Welcome to Olaacademy Institution ");
    res.render("index")
    // res.render("index");
});


app.listen(port, ()=>
{
    console.log(`Server is runnig at port no ${port}`);

})