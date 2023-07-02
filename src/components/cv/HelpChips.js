import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/HelpOutlineOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

function HelpOutlineOutlinedIcon(props) {
  if (props.chip_label === null) {
    return null;
  }
  return (
    <IconButton onClick={() => props.handler({ chip_label: props.chip_label })}>
      <HelpIcon />
    </IconButton>
  );
}

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

export { HelpOutlineOutlinedIcon, ExpandingChips, chipClickHandler };
