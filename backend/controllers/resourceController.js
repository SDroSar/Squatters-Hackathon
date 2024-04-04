// Import the resource model refer .js
const Resource = require('../models/Resource');

// Part 2: Create async signup controller function
const signup = async (req, res) => {
  // Extract type and amount from incoming request body
  const { type, amount } = req.body;

  // Check if properly saved
  try {
    const newResource = new Resource({ type, amount});
    // Function does not run until the promise i.e. save() is executed
    await newResource.save();
    res.status(201).send('Resource created successfully');
  // If error, send error message
  } catch (error) {
    console.error('Error creating the resource:', error);
    res.status(500).send('Error creating the resource: ' + error.message);
  }
};

// Export the signup function
module.exports = { signup };



