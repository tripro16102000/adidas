const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductController');

// newsController.index;
router.get('/create', productsController.create);
router.get('/:slug', productsController.show);


module.exports = router;