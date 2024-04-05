import React from "react";
import "./App.css";
import Register from "./components/Register";
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
        color: "white",
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <BrowserRouter>
        <NavBar /> {/* Navbar is always displayed at the top */}
        <Routes styles={{ padding: 0, margin: 0 }}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
