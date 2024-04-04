// Initialise a new express router to handle routers
const express = require('express');
const router = express.Router();

// Require controller functions
const resourceController = require('../controllers/resourceController');

// Part 1: Create a new POST router for facility signup
router.post('/signup', resourceController.signup);

module.exports = router;

