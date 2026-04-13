import { Box, Grid } from "@mui/material";

// Common components
import Topbar from "../Topbar";

// Components
import Intro from "./IntroBanner";
import Homelab from "./cards/Homelab";

function App() {
  return (
    <Box>
      <Topbar />
      <Intro />
      <Grid container spacing={2} sx={{ display: "none" }}>
        <Grid item xs={12} sm={6}>
          <Homelab />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
