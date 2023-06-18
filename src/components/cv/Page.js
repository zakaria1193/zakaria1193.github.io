// App.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// Common components
import Topbar from "../Topbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

// Custom components
import Education from "./Education";

function Page() {
  return (
    <Box>
      <Topbar />
      <Stack spacing={2}>
        <Item>
          <Education />
        </Item>
      </Stack>
    </Box>
  );
}

export default Page;
