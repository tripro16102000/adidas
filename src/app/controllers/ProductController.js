const Data = require('../models/Data');
const {mongooseToObject} = require('../../util/mongoose');

class ProductController{

    // product // :slug
    show(req, res, next){
        Data.findOne({slug: req.params.slug})
            .then(contents => {
                res.render('./products/show', {contents: mongooseToObject(contents)})
            })
            .catch(next)
    }
    create(req, res, next){
        res.render('products/create')
    }
}

module.exports = new ProductController;