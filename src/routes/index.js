const newsRouter = require('./news');
const productsRouter = require('./products');
const siteRouter = require('./site');
const registerRouter = require('./register');
const loginRouter = require('./login');




function route(app){
    app.use('/register', registerRouter);
    app.use('/news', newsRouter);
    app.use('/login', loginRouter)
    app.use('/products', productsRouter);
    app.use('/', siteRouter);
  

    
}

module.exports = route;