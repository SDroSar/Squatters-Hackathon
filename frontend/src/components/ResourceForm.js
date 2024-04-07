import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";





const ResourceForm = () => {

    const navigate = useNavigate();
    const {_id} = useParams ();
    const [foodPackAmount, setFoodPackAmount] = useState("");
    const [bedsAmount, setBedsAmount] = useState("");
    const [powerAmount, setPowerAmount] = useState("");
    const [resources, setResources] = useState([]);

    const manageResources = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/resources/manage", {
                foodPackAmount: foodPackAmount,
                bedsAmount: bedsAmount,
                powerAmount: powerAmount,
                facility: _id
            });
            console.log("updated resources:", res.data);
            
        } catch(error) {
            if (error.response) {
                console.error(" Error:", error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error", error.message);
            }
        }
    };

    const checkResources = async(e) => {

      e.preventDefault();
      try{
          const resl = await axios.post("http://localhost:5000/api/resources/check", {
              facility: _id
          });
          console.log("current resources:", resl.data);
          setResources(resl.data);
          console.log("current resources 2:", resources);

      } catch(error) {
          if (error.response) {
              console.error(" Error:", error.response.data);
          } else if (error.request) {
              console.error("No response received:", error.request);
          } else {
              console.error("Error", error.message);
          }
      }
    };

    return (
      <Stack>
            
        <Box
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
        <div> Current food pack amounts: {resources.foodPackAmount}</div>
            <div> Current available beds: {resources.bedsAmount}</div>
            <div> Current power pack amounts: {resources.powerAmount}</div>

            <Button 
            variant="outlined"
            onClick={(e) => {
              checkResources(e);
            }}
          >
            Check current resources
          </Button>

        <form onSubmit={(e) => {}}>
          <p>Please fill out resource form</p>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Amount of food packs"
            value={foodPackAmount}
            onChange={(e) => setFoodPackAmount(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Amount of beds"
            value={bedsAmount}
            onChange={(e) => setBedsAmount(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Amount of power packs"
            value={powerAmount}
            onChange={(e) => setPowerAmount(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={(e) => {
                manageResources(e);
            }}
          >
            Update resources
          </Button>
        </form>
      </Box>
        
      </Box>
      </Stack>
    )
};

export default ResourceForm;
