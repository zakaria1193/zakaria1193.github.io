import * as React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Gatech from "./Items/GaTech";

function Education() {
  return (
    <Stack spacing={2} divider={<Divider />}>
      <Gatech />
    </Stack>
  );
}

export default Education;
