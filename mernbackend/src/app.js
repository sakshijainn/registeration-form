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

app.get('/welcome', (request,response)=>
{
    response.render("welcome");
})



app.post('/register', async(request,response)=>
{
    try
    {
        // console.log(request.body.firstname);
        // response.send(request.body.firstname);
        const password = request.body.password;
        const cpassword  = request.body.confirmpassword;
        console.log(request.body.firstname);
        console.log(request.body.gender);

        if(password === cpassword)
        {

            const registerEmployee = new Register({
                firstname :request.body.firstname,
                email:request.body.email,
                gender:request.body.gender,
                birthday:request.body.birthday,
                password:request.body.password,
                confirmpassword:request.body.confirmpassword
            })
           const registered= await registerEmployee.save();
           response.status(201).render("welcome");

        }
        else
        {
            response.send(`pwd not matching`);
        }



    }
    catch (error)
    {
        response.status(400).send(error);
    }
})

app.get("/login" ,(request,response)=>{
    response.render("login");
})

app.post('/login', async(request,response)=>
{
    try
    {
        // console.log(request.body.firstname);
        // response.send(request.body.firstname);
        const password = request.body.password;
        const cpassword  = request.body.confirmpassword;

        if(password === cpassword)
        {

            const registerEmployee = new Register({
                firstname :request.body.firstname,
                email:request.body.email,
                gender:request.body.gender,
                birthday:request.body.birthday,
                password:request.body.password,
                confirmpassword:request.body.confirmpassword
            })
           const registered= await registerEmployee.save();
           response.status(201).render("index");
           console.log(request.body.firstname);
           console.log(request.body.gender);

        }
        else
        {
            response.send(`pwd not matching`);
        }



    }
    catch (error)
    {
        response.status(400).send(error);
    }
})


app.listen(port, ()=>
{
    console.log(`Server is runnig at port no ${port}`);

})