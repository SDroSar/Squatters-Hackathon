// Import the mongoose package
const mongoose = require('mongoose');

// Part 3: Create a account login schema
const accountSchema = new mongoose.Schema({
  // Add required tag so that all entries to the database must have accountname and password
  // Add unique tag to accountname so that no two accounts can have the same accountname
  accountname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Export the Account schema
module.exports = mongoose.model('Account', accountSchema);