const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Register = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,

    },
    phone: {
        type: Number,
    
    },
    password:{
        type: String,

    }
})

module.exports = mongoose.model('Register', Register, "register");

