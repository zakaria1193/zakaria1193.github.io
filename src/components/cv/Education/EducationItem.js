import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";

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

function ExpandingChips({ list_ }) {
  const [expandedChip, setExpandedChip] = useState(null);

  const handleChipClick = (chip) => {
    if (expandedChip === chip) {
      setExpandedChip(null);
    } else {
      setExpandedChip(chip);
    }
    console.log("clicked chip");
  };

  return (
    <Box>
      {list_.map((data) => (
        <ListItem key={data.key}>
          <Chip
            label={data.label}
            onClick={() => handleChipClick(data)}
            color={expandedChip === data ? "primary" : "default"}
          />
        </ListItem>
      ))}
      {expandedChip && (
        <Typography variant="body2">{expandedChip.additionalText}</Typography>
      )}
    </Box>
  );
}

export { EducationItem, EducationDescription, ExpandingChips };
