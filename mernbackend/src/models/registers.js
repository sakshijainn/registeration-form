const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    password:
    {
        type: String,
        required:true
    },

    gender:
    {
        type: String,
        required:true
    }, 
    birthday :
    {
        type: String,
        required:true
    },
    confirmpassword:
    {
        type:String,
        required:true
    }

})

const Register =  new mongoose.model("Register", employeeSchema);

module.exports= Register;
