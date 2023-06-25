// App.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
          <Typography variant="h3" gutterBottom>
            Education
          </Typography>
          <Education />
        </Item>
      </Stack>
    </Box>
  );
}

export default Page;
