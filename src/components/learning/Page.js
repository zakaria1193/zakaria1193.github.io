// App.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';

// Custom components
import Typography from '@mui/material/Typography';
import FilterSelect from '../helpers/FilterSelect';
import Topbar from '../Topbar';
import { sections, types, formats, difficultyLevels } from './FilterLists';
import Section from './Section';
import { items } from './ItemsData';

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
        Uses the filters below to narrow down the items displayed.
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

      <Box>
        {
          sections.map((section_title) => (
            <Section key={section_title} section_title={section_title} filteredItems={filteredItems} />
          ))
        }
      </Box>

    </Box>
  );
}

export default Page;
