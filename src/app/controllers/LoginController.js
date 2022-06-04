const Login = require('../models/Register');
const {multipleMongooseToObject} = require('../../util/mongoose');
class LoginController{
    index(req, res, next){
        Login.find({})
        .then(contents =>{
            res.render('login', {
                contents: multipleMongooseToObject(contents)
            })
        })
        .catch(next);
   

    }
    async login(req, res){
        try{
            const email = req.body.email;
            const password = req.body.password;

            console.log(email);
            console.log(password)
        }catch(error){
            res.status(400).send("invalid Email")
        }
    }
}

module.exports = new LoginController;