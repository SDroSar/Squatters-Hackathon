// Import the mongoose package
const mongoose = require('mongoose');

// Part 3: Create a user login schema
const resourceSchema = new mongoose.Schema({
  // Add required tag so that all entries to the database must have username and password
  // Add unique tag to username so that no two users can have the same username
  foodPackAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  bedsAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  powerAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  facility: {type: mongoose.Schema.Types.ObjectId, ref: 'Facility'},
});

// Export the Resource schema
module.exports = mongoose.model('Resource', resourceSchema);