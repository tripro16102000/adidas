const News = require('../models/Register');
const {multipleMongooseToObject} = require('../../util/mongoose');


class NewController{
    index(req, res, next){
        News.find({})
        .then(contents =>{
            res.render('news', {
                contents: multipleMongooseToObject(contents)
            })
        })
        .catch(next);

    }

    // news/:slug
 
}

module.exports = new NewController;