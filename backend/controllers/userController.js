// Import the user model refer User.js
const User = require('../models/User');

// Part 2: Create async signup controller function
const signup = async (req, res) => {
  // Extract username and password from incoming request body
  const { username, password } = req.body;

  // Check if properly saved
  try {
    const newUser = new User({ username, password });
    // Function does not run until the promise i.e. save() is executed
    await newUser.save();
    res.status(201).send('User created successfully');
  // If error, send error message
  } catch (error) {
    console.error('Error creating the user:', error);
    res.status(500).send('Error creating the user: ' + error.message);
  }
};

// Export the signup function
module.exports = { signup };



