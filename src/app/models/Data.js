const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Data = new Schema({
    name: {type: String},
    price: {type: String},
    image: {type: String},
    imageHover: {type: String},
    imageAds: {stype: String},
    slug: {type:String},
    test: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Data', Data, "product");