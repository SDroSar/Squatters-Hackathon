// Import the account model refer Account.js
const Account = require('../models/Account');

// Part 2: Create async register controller function
const register = async (req, res) => {
  // Extract accountname and password from incoming request body
  const { accountname, password, email } = req.body;

  const accountExists = await Account.findOne({ email });
  if (!accountExists) {
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
  } else {
    res.status(400).send('Account already exists.');
  }
  
};

const login = async (req, res) => {
  const { accountname, password } = req.body;

  const foundAccount = await  Account.findOne({accountname: accountname, password: password});

  if(foundAccount){
    console.log("Result :",foundAccount.password);
    res.status(201).send(foundAccount);

  } else {
    res.status(500).send('Try again');
  }
};

const getAccountData = async(req, res) =>{
  res.json({ message: "Account data" });
};

// Export the signup function
module.exports = { register, login, getAccountData };
