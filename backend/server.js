// Import used modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
require('dotenv').config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Initiate middleware
app.use(cors());
app.use(express.json());

// Part 4: Add in our new account signup route
// Note that the default route is /api/accounts
// i.e. full route is localhost:5000/api/accounts/signup
app.use('/api/accounts', accountRoutes);

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