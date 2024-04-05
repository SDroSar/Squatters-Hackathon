// Import the mongoose package
const mongoose = require('mongoose');

// Part 3: Create a account login schema
const facilitySchema = new mongoose.Schema({
  // Add required tag so that all entries to the database must have accountname and password
  // Add unique tag to accountname so that no two accounts can have the same accountname
  facilityname: {
    type: String,
    required: true,
    unique: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  openinghour: {
    type: String,
    required: true,
  },
  closinghour: {
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
});

// Export the Account schema
module.exports = mongoose.model('Facility', facilitySchema);