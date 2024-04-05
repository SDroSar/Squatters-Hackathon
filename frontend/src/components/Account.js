import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const Account = () => {

  const {_id} = useParams ();
  const navigate = useNavigate();


  const goToFacs = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post("http://localhost:5000/api/facilities/viewFacilities", {
      //   owner: _id
      // });
      //console.log("owned facilities:", res.data);
      // navigation to Account
      navigate(`/Facility/${_id}`);
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error", error.message);
      }
    }
  };
  return (
    <Box
    component="form"
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
        <Button
            variant="outlined"
            onClick={(e) => {
              goToFacs(e);
            }}
          >
            View Facilities
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              goToFacs(e);
            }}
          >
            Create New Facility
          </Button>
      </Box>
    </Box>
    // <Stack
    //   spacing={2}
    //   sx={{
    //     marginTop: 10,
    //     display: "flex",
    //     justifyContent: "center",

    //     alignItems: "center",
    //   }}
    // >
    //   <p>ACCOUNT logged in !</p>
    // </Stack>
  );
};

export default Account;
