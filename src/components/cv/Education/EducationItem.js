import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const EducationItem = ({
  logo,
  school,
  degree,
  start,
  end,
  location,
  children,
}) => {
  return (
    // horizontal stack with pictute and text
    <Stack direction="row" spacing={2}>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "30%",
          height: "auto",
          objectFit: "contain",
          maxWidth: "100%",
        }}
      />
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic" }}>
          {degree}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ letterSpacing: 2 }}>
          {school}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {start} - {end}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {location}
        </Typography>

        {children}
      </Box>
    </Stack>
  );
};

const EducationDescription = ({ children }) => {
  return (
    <Typography variant="body1" gutterBottom paragraph>
      {children}
    </Typography>
  );
};

export { EducationItem, EducationDescription };
