import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

// Custom components
import {
  ExperienceHeader,
  JobTitle,
  Workplace,
  Period,
  BulletList,
  BulletItem,
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
      />
      <JobTitle>Senior Embedded Toolchain Engineer</JobTitle>
      <Workplace>
        <AdaCoreLink />, Paris, France
      </Workplace>
      <Period>May 2025 – Present (1 year)</Period>
      <BulletList>
        <BulletItem>Developing cross-compilers, binary tools, and low-level run-time libraries for a wide range of targets.</BulletItem>
        <BulletItem>Working across the toolchain stack with a focus on RISC-V and other embedded architectures.</BulletItem>
        <BulletItem>Skills: RISC-V, C++, Ada, and more.</BulletItem>
      </BulletList>
    </Box>
  );
}

export default AdaCore;
