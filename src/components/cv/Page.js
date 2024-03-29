// App.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Common components
import Topbar from "../Topbar";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
}));

const SectionTitle = ({ children }) => (
  <Typography variant="h4" marginBottom={2} gutterBottom>
    {children}
  </Typography>
);

function Page() {
  return (
    <Box>
      <Topbar />
      <Stack spacing={2}>
        <Item>
          <SectionTitle>Experience</SectionTitle>
          <Experience />
        </Item>
        <Item>
          <SectionTitle>Education</SectionTitle>
          <Education />
        </Item>
      </Stack>
    </Box>
  );
}

export default Page;
