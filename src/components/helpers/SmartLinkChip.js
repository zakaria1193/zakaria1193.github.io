
// SmartLinkChip.js
import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

function SmartLinkChip({ url, name }) {
  const [favicon, setFavicon] = useState(null);
  const [title, setTitle] = useState(name);

  useEffect(() => {
    async function fetchFaviconAndTitle() {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(proxyUrl + url);
        const html = await response.text();

        // Parse the HTML to extract the favicon and title
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const linkEl = doc.querySelector('link[rel="icon"]') || doc.querySelector('link[rel="shortcut icon"]');
        const titleEl = doc.querySelector('title');

        if (linkEl) {
          let faviconUrl = linkEl.getAttribute('href');

          // Convert the relative URL to an absolute URL
          if (faviconUrl && !faviconUrl.startsWith('http')) {
            const baseUrl = new URL(url);
            faviconUrl = new URL(faviconUrl, baseUrl).toString();
          }

          setFavicon(faviconUrl);
        }
        if (titleEl && !name) {
          setTitle(titleEl.textContent);
        }
      } catch (error) {
        console.error('Error fetching favicon and title:', error);
      }
    }

    fetchFaviconAndTitle();
  }, [url, name]);

  return (
    <Chip
      label={title}
      avatar={<Avatar alt={title} src={favicon} />}
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
