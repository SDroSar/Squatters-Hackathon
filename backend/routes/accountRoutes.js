// Initialise a new express router to handle routers
const express = require('express');
const router = express.Router();

// Require controller functions
//const accountController = require('../controllers/accountController');
const {
    register,
    login,
    getAccountData,
} = require("../controllers/accountController");

// Part 1: Create a new POST router for account login
router.post('/register', register);
router.post('/login', login);
router.get('/account', getAccountData);
module.exports = router;


