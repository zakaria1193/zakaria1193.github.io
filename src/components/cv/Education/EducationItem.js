import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import Divider from "@mui/material/Divider";

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
    <Box padding={0.5}>
      <Stack
        direction="row"
        spacing={2}
        marginBottom={2}
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "25%",
          }}
        />

        <Typography variant="h8" sx={{ letterSpacing: 2, width: "100%" }}>
          {school}
        </Typography>
      </Stack>

      <Typography variant="h7" sx={{ letterSpacing: 2 }}>
        {degree}
      </Typography>
      <Typography variant="subtitle2">
        {start} - {end}
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        {location}
      </Typography>

      {children}
    </Box>
  );
};

const EducationDescription = ({ children }) => {
  return (
    <Typography variant="body2" gutterBottom paragraph>
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
