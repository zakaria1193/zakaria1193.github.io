import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function ExperienceHeader({ Workplace, subtitle, logo }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      marginBottom={2}
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "25%",
        }}
      />
      <Stack direction="column" spacing={1}>
        <Typography variant="h5" sx={{ letterSpacing: 2, width: "100%" }}>
          {Workplace}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ letterSpacing: 2, width: "100%" }}
        ></Typography>
        <Typography variant="subtitle1" sx={{ letterSpacing: 2 }}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}

function JobTitle({children}) {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  );
}

function Workplace({children}) {
  return (
    <Typography variant="subtitle2" gutterBottom>
      {children}
    </Typography>
  );
}

function Period({children}) {
  return (
    <Typography variant="subtitle2" gutterBottom>
      {children}
    </Typography>
  );
}

function Description({children}) {
  return (
    <Typography variant="body2" paragraph>
      {children}
    </Typography>
  );
}



export { ExperienceHeader, JobTitle, Workplace, Period, Description };
