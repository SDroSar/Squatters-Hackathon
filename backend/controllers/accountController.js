// Import the account model refer Account.js
const Account = require('../models/Account');

// Part 2: Create async signup controller function
const signup = async (req, res) => {
  // Extract accountname and password from incoming request body
  const { accountname, password, email } = req.body;

  // Check if properly saved
  try {
    const newAccount = new Account({ accountname, password, email });
    // Function does not run until the promise i.e. save() is executed
    await newAccount.save();
    res.status(201).send('Account created successfully');
  // If error, send error message
  } catch (error) {
    console.error('Error creating the Account:', error);
    res.status(500).send('Error creating the Account: ' + error.message);
  }
};

// Export the signup function
module.exports = { signup };



