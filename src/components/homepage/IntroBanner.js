
import React from 'react';
import { Box, Typography } from '@mui/material';
import AdaCore from './AdaCore';

const Intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 6, px: 7 }}>
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" align="left" gutterBottom>
          Hi!
        </Typography>
          I'm Zak, a senior embedded toolchain engineer working on cross-compilers, binary tools, and low-level run-time libraries at <AdaCore /> in Paris. <br />
          Here, I share my tips, thoughts, setup, and tools.

      </Box>
      <Box component="img" src="/photo.jpg" alt="Zak" sx={{ maxWidth: '45%', height: 'auto' }} />
    </Box>
  );
};

export default Intro;
