const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();
const port = process.env.port || 3000;
const route = require('./routes');
const db = require('./config/db');
//connect database

db.connect();
//routing

route(app);

 //starting
app.listen(port, ()=> {
    console.log(`Sever starting on port ${port}`)
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



