import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Custom components
import Gatech from "./Items/GaTech";
import ENSEEIHT from "./Items/ENSEEIHT";

function Education() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <Gatech />
      <ENSEEIHT />
    </Stack>
  );
}

export default Education;
