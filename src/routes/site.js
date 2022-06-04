const express = require('express');
const siteController = require('../app/controllers/SiteController');
const router = express.Router();


// newsController.index;

router.get('/search', siteController.search);
router.get('/', siteController.index );





module.exports = router;