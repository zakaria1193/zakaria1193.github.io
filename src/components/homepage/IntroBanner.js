
import React from 'react';
import { Box, Typography } from '@mui/material';
import SmartLinkChip from '../helpers/SmartLinkChip'


const Netatmo = () => {
  let url='https://www.netatmo.com'
  return <SmartLinkChip url={url} name="Netatmo"/>
}

const Intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 6, px: 7 }}>
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" align="left" gutterBottom>
          Hi!
        </Typography>
          I'm Zak, a firmware engineer working on IoT devices at <Netatmo />. <br />
          Here, I share my tips, thoughts, setup, and tools. <br />
          Otherwise, this website is a playground for me to experiment with modern frontend web technologies.
      </Box>
      <Box component="img" src="/photo.jpg" alt="Zak" sx={{ maxWidth: '45%', height: 'auto' }} />
    </Box>
  );
};

export default Intro;
