const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();
const PORT = process.env.PORT || 5000;
const route = require('./routes');
const db = require('./config/db');

db.connect();
//routing

route(app);

 //starting
app.listen(PORT, ()=> {
    console.log(`Sever starting on port ${PORT}`)
});

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger

app.use(morgan('combined'));
// Template engine

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



