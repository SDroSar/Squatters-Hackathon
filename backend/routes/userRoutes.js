// Initialise a new express router to handle routers
const express = require('express');
const router = express.Router();

// Require controller functions
const userController = require('../controllers/userController');

// Part 1: Create a new POST router for user signup
router.post('/signup', userController.signup);

module.exports = router;

