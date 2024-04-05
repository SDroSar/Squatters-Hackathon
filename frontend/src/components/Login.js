import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/accounts/login", {
        accountname: username,
        password: password,
      });
      console.log("Login Success:", res.data);
      // navigation to Account
      navigate("/Account");
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
        <form onSubmit={(e) => {}}>
          <p>Welcome back! Please login</p>
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
            label="Password"
            type="password"
            helperText="Required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="outlined"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
