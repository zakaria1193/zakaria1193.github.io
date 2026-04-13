import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import adacore_logo from "../../../../assets/adacore_logo.png";

// Custom components
import {
  ExperienceHeader,
  JobTitle,
  Workplace,
  Period,
  Description,
} from "../ExperienceItem";

function AdaCoreLink() {
  return (
    <Link href="https://www.adacore.com/" color="inherit" underline="hover">
      AdaCore
    </Link>
  );
}

function AdaCore() {
  return (
    <Box>
      <ExperienceHeader
        Workplace={<AdaCoreLink />}
        logo={adacore_logo}
      />
      <JobTitle>Senior Embedded Toolchain Engineer</JobTitle>
      <Workplace>
        <AdaCoreLink />, Paris, France
      </Workplace>
      <Period>May 2025 – Present (1 year)</Period>
      <Description>
        - Developing cross-compilers, binary tools, and low-level run-time libraries for a wide range of targets.<br />
        - Working across the toolchain stack with a focus on RISC-V and other embedded architectures.<br />
        - Skills: RISC-V, C++, Ada, and more.<br />
      </Description>
    </Box>
  );
}

export default AdaCore;
