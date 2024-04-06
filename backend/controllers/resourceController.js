// Import the resource model refer .js
const Resource = require('../models/Resource');

// Part 2: Create async signup controller function
const manage = async (req, res) => {
  // Extract type and amount from incoming request body
  const { foodPackAmount, bedsAmount, powerAmount, facility } = req.body;
  const foundResource = await  Resource.findOne({facility: facility });

  if(foundResource){
    foundResource.foodPackAmount = foodPackAmount;
    foundResource.bedsAmount = bedsAmount;
    foundResource.powerAmount = powerAmount;
    await foundResource.save();
  } else {
    // Check if properly saved
    try {
      const newResource = new Resource({ foodPackAmount, bedsAmount, powerAmount, facility });
      // Function does not run until the promise i.e. save() is executed
      await newResource.save();

      res.status(201).send(newResource);
      // If error, send error message
    } catch (error) {
      console.error('Error adding the resource:', error);
      res.status(500).send('Error adding the resource: ' + error.message);
    }
  }
};

const check = async (req, res) => {
  const {facility} = req.body;
  const resourceExists = await Resource.findOne({ facility });
  if (resourceExists) {
    try {
      res.status(201).send(resourceExists);
    // If error, send error message
    } catch (error) {
      console.error('Error checking the resource:', error);
      res.status(500).send('Error checking the resource: ' + error.message);
    }
  } else {
    res.status(201).send(0);
    
  }
};

// Export the signup function
module.exports = { manage, check };



