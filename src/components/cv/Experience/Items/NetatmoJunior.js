import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import netatmo_logo from "../../../../assets/netatmo_logo.png";

// Custom components
import { ExperienceHeader, JobTitle, Workplace, Period, Description } from "../ExperienceItem";

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
        Workplace={<NetatmoLink />}
        subtitle={<LegrandLink />}
        logo={netatmo_logo}
      />
      <JobTitle>
        Senior Software Engineer - Team Lead
      </JobTitle>
      <Workplace>
        Netatmo, Paris, France
      </Workplace>
      <Period>
        2018 - 2020
      </Period>

      <Description>
        Leading a team of 4 senior and junior software engineers. I was responsible for driving and mentoring the team.

        In terms of technical responsabilities, I was in charge of:
         - Understanding and treating the critical issues of the product such as:
            - security issues
            - OTA update issues
            - Power consumption issues
            - Zigbee network issues
         - Release management and update of all the product lines.
         - Driving architecture decisions for new products and features such as the smart automations, the color lighting remotes.

        <br />
        In terms of management:
        - I implemented the scrum methodology in the team, and was the scrum master.
        - I successfuly recruited 4+ engineers. And onboarded 2 of them in my team.




        
        
      </Description>
      // Smart chips

      <JobTitle>
        Junior Software Engineer
      </JobTitle>
      <Workplace>
        Netatmo, Paris, France
      </Workplace>
      <Period>
        2018 - 2020
      </Period>

      <Description>

        Writing and maintaining the firmware of the Legrand with Netatmo smart home devices.
        <br />
        In a team of 5, I was in charge of the codeowner of the light dimming feature, as well
        as the Zigbee stack. As well as many gateway features.

        <br />
        I also was owner of the Velux active product, which is a smart window opener. I developped the smart automations.
        
      </Description>
      // Smart chips

      // Technologies
      C, GCC, Makefile
      Git, Gitlab CI 
      // Projects portfolio
      // Challenges -- hidden


      
    </Box>
  );
}

export default NetatmoJunior;
