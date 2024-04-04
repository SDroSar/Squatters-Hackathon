// Import the facility model refer .js
const Facility = require('../models/Facility');

// Part 2: Create async signup controller function
const signup = async (req, res) => {
  // Extract organisation, address, contact and hours from incoming request body
  const { organisation, address, contact, hours } = req.body;

  // Check if properly saved
  try {
    const newFacility = new Facility({ organisation, address, contact, hours});
    // Function does not run until the promise i.e. save() is executed
    await newFacility.save();
    res.status(201).send('Facility created successfully');
  // If error, send error message
  } catch (error) {
    console.error('Error creating the facility:', error);
    res.status(500).send('Error creating the facility: ' + error.message);
  }
};

// Export the signup function
module.exports = { signup };



