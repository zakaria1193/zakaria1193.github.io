import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import netatmo_logo from "../../../../assets/netatmo_logo.png";

// Custom components
import { ExperienceHeader } from "../ExperienceItem";

function Netatmo() {
  return (
    <Link href="https://www.netatmo.com/" color="inherit" underline="hover">
      Netatmo
    </Link>
  );
}

function Legrand() {
  return (
    <>
      A brand of{" "}
      <Link
        href="https://www.legrandgroup.com/"
        color="inherit"
        underline="hover"
      >
        Legrand
      </Link>{" "}
      Group
    </>
  );
}

function NetatmoJunior() {
  return (
    <Box>
      <ExperienceHeader
        Workplace={<Netatmo />}
        subtitle={<Legrand />}
        logo={netatmo_logo}
      />
      <Typography variant="h6" gutterBottom>
        Junior Software Engineer
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Netatmo, Paris, France
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        2018 - 2020
      </Typography>
      <Typography variant="body2" paragraph>
        Netatmo is a French company that manufactures smart home devices such as
        weather stations, thermostats and cameras. It was acquired by Legrand in
        2018.
      </Typography>
      <Typography variant="body2" paragraph>
        I worked on the Netatmo Weather Station, a connected weather station
        that measures indoor air quality, temperature, humidity, CO2
        concentration and noise pollution. It is composed of an indoor module
        and an outdoor module that communicate with each other and with the
        Netatmo servers.
      </Typography>
    </Box>
  );
}

export default NetatmoJunior;
