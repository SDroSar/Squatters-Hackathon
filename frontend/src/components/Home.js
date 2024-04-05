import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SignupForm = () => {
  return (
    <Stack spacing={2}>
      <Map />
    </Stack>
  );
};

export default SignupForm;
