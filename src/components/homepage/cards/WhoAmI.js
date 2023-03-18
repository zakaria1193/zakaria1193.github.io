import { Button, Typography } from '@mui/material';
import { StyledCard, CardTitle } from './CardsCommon';

const WhoAmI = () => {
  return (
    <StyledCard>
      <CardTitle>
        Who am I
      </CardTitle>
      <Typography align="center">
        <Button variant="outlined" color="primary" href="/resume">
          View My Resume
        </Button>
      </Typography>
    </StyledCard>
  );
};

export default WhoAmI;
