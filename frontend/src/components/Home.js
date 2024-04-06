import React, { useState } from "react";
import axios from "axios";
import DummyMap from "./DummyMap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SignupForm = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <DummyMap />
    </Stack>
  );
};

export default SignupForm;
