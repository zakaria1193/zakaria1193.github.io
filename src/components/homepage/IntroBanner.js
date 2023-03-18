import React from 'react';
import { Box, Typography } from '@mui/material';

const Intro = () => {
  return (
    <Box py={6} px={7}>
      <Typography variant="h2" align="left" gutterBottom>
        Hi, I'm Zak
      </Typography>
      <Typography variant="body1" align="left">
        I'm a firmware engineer working on IoT devices at Netatmo. <br />
        Here, I share my tips, thoughts, setup and tools. Otherwise, this website is a playground for me to experiment with modern frontend web technologies.
      </Typography>
    </Box>
  );
};

export default Intro;
