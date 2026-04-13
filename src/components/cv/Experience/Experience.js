import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Custom components
import AdaCore from "./Items/AdaCore";
import Netatmo from "./Items/Netatmo";

function Experience() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <AdaCore/>
      <Netatmo/>
    </Stack>
  );
}

export default Experience;
