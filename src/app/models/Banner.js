const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Banner = new Schema({
    bannerImg: {type: String},
    bannerTitle: {type: String},
    bannerText: {type: String},
 
});

module.exports = mongoose.model('Banner', Banner, "banner");