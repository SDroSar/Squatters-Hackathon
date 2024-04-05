// Initialise a new express router to handle routers
const express = require('express');
const router = express.Router();

// Require controller functions
//const accountController = require('../controllers/accountController');
const {
    create
} = require("../controllers/facilityController");

// Part 1: Create a new POST router for account login
router.post('/create', create);
module.exports = router;


