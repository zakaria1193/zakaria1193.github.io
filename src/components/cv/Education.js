import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import gaTechLogo from "../../assets/Georgia_Tech_seal.svg.png";

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
      <img src={logo} alt="Logo" width="100" height="100" />
      <Box>
        <Typography variant="h6" gutterBottom>
          {degree}
        </Typography>
        <Typography variant="h6" gutterBottom>
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

function Education() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <EducationItem
        logo={gaTechLogo}
        school="Georgia Institute of Technology"
        degree="Master of Science in Electrical and Computer Engineering"
        start="2015"
        end="2016"
        location="Atlanta, GA, USA"
      >
        toto
      </EducationItem>
    </Stack>
  );
}

export default Education;
