import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Custom components
import Netatmo from "./Items/Netatmo";

function Experience() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <Netatmo/>
    </Stack>
  );
}

export default Experience;
