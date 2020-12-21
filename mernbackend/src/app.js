const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const { response } = require("express");
require("./db/conn");

const Register = require("./models/registers");
const port = process.env.PORT || 3000;



const static_path = path.join(__dirname ,  "../public");
// console.log(path.join(__dirname ,  "../public"));

const template_path = path.join(__dirname ,  "../templates/views");
const partials_path = path.join(__dirname ,  "../templates/partials/");
// console.log(path.join(__dirname ,  "../templates/views"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set('view engine' , 'hbs');
app.set("views", template_path);

hbs.registerPartials(partials_path);


app.get("/",(request,response)=>{
    // res.send("Welcome to Olaacademy Institution ");
    response.render("index");
    // res.render("index");
});
app.get('/register', (request,response)=>
{
    response.render("register");
})


app.post('/register', async(request,response)=>
{
    try
    {
        console.log(request.body.firstname);
        response.send(request.body.firstname);

    }
    catch (error)
    {
        response.status(400).send(error);
    }
})

app.get("/login" ,(request,response)=>{
    response.render("login");
})


app.listen(port, ()=>
{
    console.log(`Server is runnig at port no ${port}`);

})