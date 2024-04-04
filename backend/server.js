// Import used modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
const facilityRoutes = require('./routes/facilityRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
require('dotenv').config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Initiate middleware
app.use(cors());
app.use(express.json());

// Part 4: Add in our new user signup route
// Note that the default route is /api/users
// i.e. full route is localhost:5000/api/users/signup
app.use('/api/accounts', accountRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/resources', resourceRoutes);
// Connect to Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongDB and server is running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.log(error)
  })