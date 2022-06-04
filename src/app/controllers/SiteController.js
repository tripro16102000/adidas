const Data = require('../models/Data');
const Banner = require('../models/Banner');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController{
    index(req, res, next){
        Data.find({})
        .then(contents =>{
            res.render('home', {
                contents: multipleMongooseToObject(contents)
            })
        })
        .catch(next);

    }
    index2(req, res, next){
        Banner.find({})
        .then(content =>{
            res.render('home', {
                content: multipleMongooseToObject(content)
            })
        })
        .catch(next);

    }


    // search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController;