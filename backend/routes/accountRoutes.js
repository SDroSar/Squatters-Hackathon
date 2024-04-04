// Initialise a new express router to handle routers
const express = require('express');
const router = express.Router();

// Require controller functions
const accountController = require('../controllers/accountController');

// Part 1: Create a new POST router for account signup
router.post('/signup', accountController.signup);

module.exports = router;

