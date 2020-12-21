const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;



const static_path = path.join(__dirname ,  "../public");
// console.log(path.join(__dirname ,  "../public"));

const template_path = path.join(__dirname ,  "../template/views");
app.use(express.static(static_path));

app.set("view engine" , "hbs");

app.set("views", template_path);


app.get("/",(req,res)=>{
    // res.send("Welcome to Olaacademy Institution ");
    res.render("index");
});


app.listen(port, ()=>
{
    console.log(`Server is runnig at port no ${port}`);

})