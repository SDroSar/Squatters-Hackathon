import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const FacilityForm = () => {
  const [facilityname, setFacilityName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [openinghour, setOpeningHour] = useState("");
  const [closinghour, setClosingHour] = useState("");
  const [address, setAddress] = useState("");

  const {_id} = useParams ();

  const navigate = useNavigate();


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/facilities/create", {
        facilityname: facilityname,
        contactnumber: contactnumber,
        openinghour: openinghour,
        closinghour: closinghour,
        address: address,
        owner: _id
      });
      console.log("Creation Success:", res.data);
      navigate(`/Account/${res.data.owner}`);
    } catch (error) {
      if (error.response) {
        console.error("Creation Error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error", error.message);
      }
    }
  };

  return (
    <Box
      //component="form" 
      theme="none"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

        paddingTop: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <p>Welcome! Please create facility below</p>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Facility name"
            helperText="Required"
            value={facilityname}
            onChange={(e) => setFacilityName(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Contact number"
            helperText="Required"
            value={contactnumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Opening Hour"
            helperText="Required"
            value={openinghour}
            onChange={(e) => setOpeningHour(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Closing Hour"
            helperText="Required"
            value={closinghour}
            onChange={(e) => setClosingHour(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Address"
            helperText="Required"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            Create
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default FacilityForm;
