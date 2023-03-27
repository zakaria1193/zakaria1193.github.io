import { Box, Typography } from '@mui/material';

import { sections } from './FilterLists';
import { Item } from './Item';

function Section({ section_title, filteredItems }) {
  const sectionItems = filteredItems.filter((item) => item.section === section_title);

  if (!sectionItems.length) return null;

  return (
    <Box>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>
        {section_title}
      </Typography>
      { 
        sectionItems.map((item) => (
          <Item key={item.name} item={item} />
        ))
      }
    </Box>
  );
}
 
export default Section;
