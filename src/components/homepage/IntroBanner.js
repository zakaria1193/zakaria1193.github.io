
import React from 'react';
import { Box, Chip, Link, Typography } from '@mui/material';


const Netatmo = () => {
  return (
  <Link href="https://www.netatmo.com" underline="none" target="_blank" rel="noopener noreferrer">
      Netatmo
  </Link>
  )
}

const Intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 6, px: 7 }}>
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" align="left" gutterBottom>
          Hi!
        </Typography>
        <Typography variant="body1" align="left">
          I'm Zak, a firmware engineer working on IoT devices at <Netatmo />. <br />
          Here, I share my tips, thoughts, setup, and tools. <br />
          Otherwise, this website is a playground for me to experiment with modern frontend web technologies.
        </Typography>
      </Box>
      <Box component="img" src="/photo.jpg" alt="Zak" sx={{ maxWidth: '45%', height: 'auto' }} />
    </Box>
  );
};

export default Intro;
