import { Typography } from '@mui/material';
import { StyledCard, CardTitle } from './CardsCommon';

const Homelab = () => {
  return (
    <StyledCard>
      <CardTitle>
        Why did I make my website?
      </CardTitle>
      <Typography variant="body1" align="left">
        I could have used Medium or some other no-code website generator. However, I wanted to use this opportunity to learn and play with the modern tech stack. This website is a place where I share my thoughts, tools, and tips on firmware engineering for IoT devices, as well as experiment with modern frontend web technologies.
      </Typography>
    </StyledCard>
  );
};

export default Homelab;
