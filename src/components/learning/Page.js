// App.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterSelect from '../helpers/FilterSelect';
import SmartLinkChip from '../helpers/SmartLinkChip';
import Topbar from '../Topbar';

import { items, types, formats, difficultyLevels, sections } from './Items';


function Page() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedDifficultyLevels, setSelectedDifficultyLevels] = useState([]);

  const filteredItems = items.filter((item) =>
    (!selectedTypes.length || selectedTypes.includes(item.type)) &&
    (!selectedFormats.length || selectedFormats.includes(item.format)) &&
    (!selectedDifficultyLevels.length || selectedDifficultyLevels.includes(item.difficultyLevel))
  );

  return (
    <Box>
      <Topbar />
      <Typography variant="h6" paragraph sx={{ marginTop: 2 }}>
        Use the filters below to narrow down the items displayed.
      </Typography>
      <Box display="flex" sx={{ flexDirection: 'row' }} >
        <FilterSelect
          label="Pdf? Webpage? Video?"
          options={types}
          value={selectedTypes}
          onChange={(e) => setSelectedTypes(e.target.value)}
        />
        <FilterSelect
          label="Format"
          options={formats}
          value={selectedFormats}
          onChange={(e) => setSelectedFormats(e.target.value)}
        />
        <FilterSelect
          label="Difficulty Level"
          options={difficultyLevels}
          value={selectedDifficultyLevels}
          onChange={(e) => setSelectedDifficultyLevels(e.target.value)}
        />
      </Box>

      {sections.map((section) => {
        const sectionItems = filteredItems.filter((item) => item.section === section);

        if (!sectionItems.length) return null;

        return (
          <Box key={section}>
            <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>{section}</Typography>
            <Box display="flex" flexWrap="wrap">
              {sectionItems.map((item) => (
                <SmartLinkChip key={item.id} url={item.url} name={item.name} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Page;
