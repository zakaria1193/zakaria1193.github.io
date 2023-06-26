import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
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
      <Box padding={0.5}>
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
    <Stack spacing={2} border={0.2} borderColor="divider" padding={2}>
      <Box>
        {list_.map((data) => (
          <Chip
            key={data.key}
            label={data.label}
            onClick={() => handleChipClick(data)}
            color={expandedChip === data ? "primary" : "default"}
          />
        ))}
      </Box>
      {expandedChip && (
        <Typography variant="body2" GutterBottom paragraph>
          {expandedChip.additionalText}
        </Typography>
      )}
    </Stack>
  );
}

export { EducationItem, EducationDescription, ExpandingChips };
