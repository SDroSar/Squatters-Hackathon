import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useEffect } from 'react';


const Facility= () => {
    const {_id} = useParams ();
    const [name, setName] = useState([]);


    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  viewFacilities()
        return () => { ignore = true; }
        },[]);

    const viewFacilities = async (e) => {
        //e.preventDefault();


        try {
            const res = await axios.post("http://localhost:5000/api/facilities/viewFacilities", {
            _id: _id
            });
            console.log("owned facilities:", res.data);
            setName(res.data);
            // navigation to Account
            //navigate(`/Facility`);
            
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
    <div>
        <ol align="left">
        {name.map((data) => {
            return(
                <li key={data._id}>
                    <ul>
                        <li> Facility Name: {data.facilityname}</li>
                        <li> Contact Number: {data.contactnumber}</li>
                        <li> Address: {data.address}</li>
                        <li> Open from {data.openinghour} to {data.closinghour}</li>
                    </ul>  
                </li>
            )
        })}
        </ol>
    </div>
   
    )
};

export default Facility;