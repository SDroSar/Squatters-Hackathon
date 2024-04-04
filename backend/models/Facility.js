// Import the mongoose package
const mongoose = require('mongoose');

// Part 3: Create a user login schema
const userSchema = new mongoose.Schema({
  // Add required tag so that all entries to the database must have username and password
  // Add unique tag to username so that no two users can have the same username
  organisation: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },  
  hours: {
    type: String,
    required: true,
  },
});

// Export the Facility schema
module.exports = mongoose.model('Facility', facilitySchema);