const mongoose = require('mongoose');
const databaseURL = 'mongodb://localhost:27017/database_website';

async function connect() {
    try {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Success')
    } catch (error) {
        console.log('Fail')

    }
}

module.exports = { connect }