import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Custom components
import NetatmoJunior from "./Items/NetatmoJunior";

function Experience() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <NetatmoJunior />
    </Stack>
  );
}

export default Experience;
