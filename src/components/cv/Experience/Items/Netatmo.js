import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import netatmo_logo from "../../../../assets/netatmo_logo.png";

// Custom components
import {
  ExperienceHeader,
  JobTitle,
  Workplace,
  Period,
  BulletList,
  BulletItem,
  SubBulletItem,
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
      <Period>Jan 2021 – May 2025 (4 yrs 5 mos)</Period>
      <BulletList>
        <BulletItem>
          Led the development and launch of 10+ new wireless electrical devices and maintained 20+ others with approximately 100 sub-variants:
          <BulletList nested>
            <SubBulletItem>Actively contributed to software development while managing and reviewing my team's output, ensuring reusability, maintainability, and testability.</SubBulletItem>
            <SubBulletItem>Designed and implemented key architectural features for new products, in close collaboration with backend, frontend, and hardware engineers.</SubBulletItem>
          </BulletList>
        </BulletItem>
        <BulletItem>Developed and deployed continuous integration pipelines, overseeing fleet-wide rollouts and KPI monitoring.</BulletItem>
        <BulletItem>
          Personally handled the resolution of critical technical issues, including:
          <BulletList nested>
            <SubBulletItem>Networking (local radio and remote), security vulnerabilities, OTA updates, power consumption, and KPI reports.</SubBulletItem>
          </BulletList>
        </BulletItem>
      </BulletList>
      <JobTitle>Embedded Software Engineer</JobTitle>
      <Workplace>
        <NetatmoLink />, Paris, France
      </Workplace>
      <Period>Mar 2017 – Jan 2021 (3 yrs 11 mos)</Period>
      <BulletList>
        <BulletItem>
          Developed and maintained firmware for multiple wireless products as part of the <LegrandLink /> partnership, working with a team of 5 senior engineers:
          <BulletList nested>
            <SubBulletItem>Led the development of light dimming and power measurement features, utilizing expertise in power electronics and signal processing.</SubBulletItem>
            <SubBulletItem>Developed software components reused across various products, including the Wi-Fi to Zigbee bridge.</SubBulletItem>
          </BulletList>
        </BulletItem>
        <BulletItem>Delivered several key features for the <VeluxLink /> product.</BulletItem>
        <BulletItem>Grew to become the technical expert on the Zigbee protocol within the Legrand group after its acquisition of Netatmo.</BulletItem>
      </BulletList>
    </Box>
  );
}

export default Netatmo;

