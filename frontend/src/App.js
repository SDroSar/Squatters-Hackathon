import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      className="App"
      sx={{
        color: "#190B39",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        width: "100%",
      }}
    >
      <BrowserRouter>
        <NavBar /> {/* Navbar is always displayed at the top */}
        <Routes styles={{ padding: 0, margin: 0 }}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
