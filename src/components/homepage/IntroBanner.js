
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import SmartLinkChip from '../helpers/SmartLinkChip'


const AdaCore = () => {
  let url='https://www.adacore.com'
  return <SmartLinkChip url={url} name="AdaCore"/>
}

const Intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 6, px: 7 }}>
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" align="left" gutterBottom>
          Hi!
        </Typography>
          I'm Zak, a senior embedded toolchain engineer working on cross-compilers, binary tools, and low-level run-time libraries at <AdaCore /> in Paris. <br />
          Here, I share my tips, thoughts, setup, and tools. <br />
          Otherwise, this website is a playground for me to experiment with modern frontend web technologies. <br />
          Checkout <Link underline='hover' href='/cv'>my resume</Link> for more information.

      </Box>
      <Box component="img" src="/photo.jpg" alt="Zak" sx={{ maxWidth: '45%', height: 'auto' }} />
    </Box>
  );
};

export default Intro;
