import { Button, Typography } from '@mui/material';
import { StyledCard, CardTitle } from './CardsCommon';

const LearningResources = () => {
  return (
    <StyledCard>
      <CardTitle>
        Embedded Learning Resources
      </CardTitle>
      <Typography variant="subtitle1" py={2}>
        I've compiled a list of resources that I've found useful in my journey to learn embedded systems. I hope you find them useful too!
      </Typography>
      <Typography align="center">
        <Button variant="contained" color="secondary" href="/resources">
          View Resources
        </Button>
      </Typography>
    </StyledCard>
  );
};

export default LearningResources;

