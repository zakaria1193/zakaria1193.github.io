
import React from 'react';
import { Box, Typography } from '@mui/material';
import AdaCore from './AdaCore';

const Intro = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: { xs: 'center', md: 'flex-start' },
      py: 6,
      px: { xs: 2, md: 7 },
    }}>
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
        <Typography variant="h2" align="left" gutterBottom>
          Hi!
        </Typography>
          I'm Zak, a senior embedded toolchain engineer working on cross-compilers, binary tools, and low-level run-time libraries at <AdaCore /> in Paris. <br />
          Here, I share my tips, thoughts, setup, and tools.

      </Box>
      <Box sx={{ maxWidth: { xs: '80%', md: '45%' }, mt: { xs: 3, md: 0 } }}>
        <picture>
          <source srcSet="/photo.webp" type="image/webp" />
          <img
            src="/photo.jpg"
            alt="Zak"
            loading="lazy"
            width="600"
            height="800"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </picture>
      </Box>
    </Box>
  );
};

export default Intro;
