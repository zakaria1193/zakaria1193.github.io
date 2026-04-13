import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { HelpOutlineOutlinedIcon } from "../HelpChips";

const EducationItem = ({
  logo,
  school,
  school_help_label = null,
  degree,
  degree_help_label = null,
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
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={2}
        marginBottom={2}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: { xs: '50%', sm: '25%' } }}
        />

        <Typography variant="h8" sx={{ letterSpacing: 2, width: "100%" }}>
          {school}
        </Typography>
        <HelpOutlineOutlinedIcon
          handler={handleChipClick}
          chip_label={school_help_label}
        />
      </Stack>

      <Typography variant="h7" sx={{ letterSpacing: 2 }}>
        {degree}
      </Typography>
      <HelpOutlineOutlinedIcon
        handler={handleChipClick}
        chip_label={degree_help_label}
      />

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

export { EducationItem, EducationDescription };
