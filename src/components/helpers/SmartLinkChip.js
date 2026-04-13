
// SmartLinkChip.js
import React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

function SmartLinkChip({ url, name }) {
  const domain = new URL(url).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

  return (
    <Chip
      label={name}
      avatar={<Avatar alt={name} src={faviconUrl} />}
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      clickable
      sx={{ marginRight: 1, marginBottom: 1 }}
    />
  );
}

export default SmartLinkChip;
