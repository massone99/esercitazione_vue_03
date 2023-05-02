const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();


router.route('/')
    .get(moviesController.show_index);
module.exports = router;