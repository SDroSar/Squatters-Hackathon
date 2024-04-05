import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        username,
        password,
      });
      console.log("Register Success:", res.data);
    } catch (error) {
      if (error.response) {
        console.error("Register Error:", error.response.data);
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
        <form onSubmit={handleSubmit}>
          <p>Welcome! Please Register below</p>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Username"
            helperText="Required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Email"
            type="email"
            helperText="Required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            required
            id="outlined-required"
            label="Password"
            type="password"
            helperText="Required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
