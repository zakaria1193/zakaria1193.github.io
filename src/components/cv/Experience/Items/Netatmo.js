import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import netatmo_logo from "../../../../assets/netatmo_logo.png";

// Custom components
import {
  ExperienceHeader,
  JobTitle,
  Workplace,
  Period,
  Description,
} from "../ExperienceItem";

function NetatmoLink() {
  return (
    <Link href="https://www.netatmo.com/" color="inherit" underline="hover">
      Netatmo
    </Link>
  );
}

function LegrandLink() {
  return (
    <>
      A brand of <Link href="https://www.legrandgroup.com/" color="inherit" underline="hover">
        Legrand
      </Link> Group
    </>
  );
}

function VeluxLink() {
  return (
    <Link href="https://velux.com/activeinfo" color="inherit" underline="hover">
      Velux with Netatmo
    </Link>
  );
}

function Netatmo() {
  return (
    <Box>
      <ExperienceHeader
        Workplace={<NetatmoLink />}
        subtitle={<LegrandLink />}
        logo={netatmo_logo}
      />
      <JobTitle>Senior Software Engineer - Team Lead</JobTitle>
      <Workplace>
        <NetatmoLink />, Paris, France
      </Workplace>
      <Period>2021 - Present (3 years)</Period>
      <Description>
        - Led the development and launch of 10+ new wireless electrical devices and maintained 20+ others with approximately 100 sub-variants:<br />
        <span style={{ marginLeft: "1em" }}>- Actively contributed to software development while managing and reviewing my team's output, ensuring reusability, maintainability, and testability.</span><br />
        <span style={{ marginLeft: "1em" }}>- Designed and implemented key architectural features for new products, in close collaboration with backend, frontend, and hardware engineers.</span><br />
        - Developed and deployed continuous integration pipelines, overseeing fleet-wide rollouts and KPI monitoring.<br />
        - Personally handled the resolution of critical technical issues, including:<br />
        <span style={{ marginLeft: "1em" }}>- Networking (local radio and remote), security vulnerabilities, OTA updates, power consumption, and KPI reports.</span><br />
      </Description>
      <JobTitle>Embedded Software Engineer</JobTitle>
      <Workplace>
        <NetatmoLink />, Paris, France
      </Workplace>
      <Period>2017 - 2021 (4 years)</Period>
      <Description>
        - Developed and maintained firmware for multiple wireless products as part of the <LegrandLink /> partnership, working with a team of 5 senior engineers:<br />
        <span style={{ marginLeft: "1em" }}>- Led the development of light dimming and power measurement features, utilizing expertise in power electronics and signal processing.</span><br />
        <span style={{ marginLeft: "1em" }}>- Developed software components reused across various products, including the Wi-Fi to Zigbee bridge.</span><br />
        - Delivered several key features for the <VeluxLink /> product.<br />
        - Grew to become the technical expert on the Zigbee protocol within the Legrand group after its acquisition of Netatmo.<br />
      </Description>
    </Box>
  );
}

export default Netatmo;

