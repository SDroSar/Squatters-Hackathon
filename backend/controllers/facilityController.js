// Import the account model refer Account.js
const Facility = require('../models/Facility');

// Part 2: Create async signup controller function
const create = async (req, res) => {
  // Extract accountname and password from incoming request body
  const { facilityname, contactnumber, openinghour, closinghour, address, owner} = req.body;

  const facilityExists = await Facility.findOne({ address });
  if (!facilityExists) {
    try {
      const newFacility = new Facility({ facilityname, contactnumber, openinghour, closinghour, address, owner });
      // Function does not run until the promise i.e. save() is executed
      await newFacility.save();
      res.status(201).send(newFacility);
    // If error, send error message
    } catch (error) {
      console.error('Error creating the Facility:', error);
      res.status(500).send('Error creating the Facility: ' + error.message);
    }
  } else {
    res.status(400).send('Account already exists.');
  }
};

const viewFacilities = async (req, res) => {
  const {_id} = req.body;
  const foundFacilities = await Facility.find({owner: _id});

  if(foundFacilities){
    console.log("Result :",foundFacilities);
    res.status(201).send(foundFacilities);

  } else {
    res.status(500).send('Try again');
  }
};

module.exports = { create, viewFacilities };
