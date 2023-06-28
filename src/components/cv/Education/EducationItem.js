import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";

const EducationItem = ({
  logo,
  school,
  degree,
  start,
  end,
  location,
  handleChipClick,
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

      <button onClick={() => handleChipClick({ chip_label: "Why?" })}>
        <HelpIcon color="primary" fontSize="small" />
      </button>
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

function ExpandingChips({ list_, selectedChip, handleChipClick }) {
  if (selectedChip === null) {
    return null;
  }
  return (
    <Stack spacing={2} border={0.2} borderColor="divider" padding={2}>
      <Box>
        {list_.map((data) => (
          <Chip
            key={data.key}
            label={data.label}
            onClick={() => handleChipClick({ chip: data })}
            color={selectedChip === data ? "primary" : "default"}
          />
        ))}
      </Box>
      {selectedChip && (
        <Typography variant="body2" paragraph>
          {selectedChip.additionalText}
        </Typography>
      )}
    </Stack>
  );
}

const chipClickHandler = (list_, state) => {
  let handleChipClick = ({ chip = null, chip_label = null }) => {
    if (chip === null) {
      console.info("Chip null in handleChipClick");
      // look for the chip with the label
      chip = list_.find((chip) => chip.label === chip_label);
      if (chip === undefined) {
        console.error(
          "Chip not found in handleChipClick using label",
          chip_label
        );
        return;
      }
    } else {
      console.log("Chip in handleChipClick: ", chip);
    }

    if (state.selectedChip === chip) {
      state.setSelectedChip(null);
    } else {
      state.setSelectedChip(chip);
    }
  };

  return handleChipClick;
};

export {
  EducationItem,
  EducationDescription,
  ExpandingChips,
  chipClickHandler,
};
