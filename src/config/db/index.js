const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/database_website', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Success')
    } catch (error) {
        console.log('Fail')

    }
}

module.exports = { connect }