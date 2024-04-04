// Import the mongoose package
const mongoose = require('mongoose');

// Part 3: Create a user login schema
const userSchema = new mongoose.Schema({
  // Add required tag so that all entries to the database must have username and password
  // Add unique tag to username so that no two users can have the same username
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the User schema
module.exports = mongoose.model('User', userSchema);