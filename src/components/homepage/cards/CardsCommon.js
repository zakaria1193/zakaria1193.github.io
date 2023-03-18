import { Typography, Card, CardContent } from '@mui/material';

function StyledCard({ children }) {
  const cardStyles = {
    margin: '10px',
    border : '1px solid #e0e0e0',
    marginBottom: '1rem',
    height: '100%',
  };

  return (
    <Card sx={cardStyles} elevation={0}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function CardTitle({ children }) {
  const titleStyles = {
    marginBottom: '0.5rem',
    // Add any other desired styles
  };

  return (
    <Typography variant="h5" component="h2" sx={titleStyles}>
      {children}
    </Typography>
  );
}

export { StyledCard, CardTitle };
