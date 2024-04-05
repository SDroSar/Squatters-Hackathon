import React, { useState } from "react";

import Stack from "@mui/material/Stack";

const Account = () => {
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
      <p>ACCOUNT logged in !</p>
    </Stack>
  );
};

export default Account;
