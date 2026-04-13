import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ExperienceHeader({ Workplace, subtitle, logo }) {
  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      spacing={2}
      marginBottom={2}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
    >
      {logo && (
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: { xs: '50%', sm: '25%' } }}
        />
      )}
      <Stack direction="column" spacing={1}>
        <Typography variant="h6" sx={{ letterSpacing: 2, width: "100%" }}>
          {Workplace}
        </Typography>

        <Typography variant="subtitle1" sx={{ letterSpacing: 2 }}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}

function JobTitle({children}) {
  return (
    <Typography variant="h6" gutterBottom>
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

function BulletList({ children, nested = false }) {
  return (
    <Box
      component="ul"
      sx={{
        paddingLeft: nested ? 3 : 2,
        marginTop: nested ? 0.5 : 0,
        marginBottom: nested ? 0.5 : 1.5,
        listStyle: "none",
      }}
    >
      {children}
    </Box>
  );
}

function BulletItem({ children }) {
  return (
    <Typography
      component="li"
      variant="body2"
      sx={{
        position: "relative",
        paddingLeft: "1.25em",
        marginBottom: 0.75,
        lineHeight: 1.6,
        "&::before": {
          content: '"•"',
          position: "absolute",
          left: 0,
          color: "text.secondary",
        },
      }}
    >
      {children}
    </Typography>
  );
}

function SubBulletItem({ children }) {
  return (
    <Typography
      component="li"
      variant="body2"
      sx={{
        position: "relative",
        paddingLeft: "1.25em",
        marginBottom: 0.5,
        lineHeight: 1.6,
        color: "text.secondary",
        "&::before": {
          content: '"–"',
          position: "absolute",
          left: 0,
          color: "text.disabled",
        },
      }}
    >
      {children}
    </Typography>
  );
}

export { ExperienceHeader, JobTitle, Workplace, Period, Description, BulletList, BulletItem, SubBulletItem };
