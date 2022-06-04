const Register = require('../models/Register');
const {multipleMongooseToObject} = require('../../util/mongoose');
class RegisterController{
    index(req, res, next){
        Register.find({})
        .then(contents =>{
            res.render('register', {
                contents: multipleMongooseToObject(contents)
            })
        })
        .catch(next);
   

    }
}

module.exports = new RegisterController;