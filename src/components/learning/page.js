// App.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterSelect from '../helpers/FilterSelect';
import SmartLinkChip from '../helpers/SmartLinkChip';
import Topbar from '../Topbar';

const types = ['Blog Post', 'Article', 'White Paper'];
const formats = ['Webpage', 'Video'];
const difficultyLevels = ['Junior', 'Intermediate', 'Senior'];
const sections = ['Web', 'Embedded', 'DevOps'];

const test_existance = (element, array) =>
{
  if (!array.includes(element))
  { 
    throw new Error(`Element ${element} not found in array ${array}`)
  }
}

class item {
  constructor(name, type, format, difficultyLevel, section, url) {
    this.name = name;
    this.url = url;

    test_existance(type, types);
    this.type = type;

    test_existance(format, formats);
    this.format = format;

    test_existance(difficultyLevel, difficultyLevels);
    this.difficultyLevel = difficultyLevel;

    test_existance(section, sections);
    this.section = section;
  }
}

const items = [
  new item('How to use React Hooks', 'Blog Post', 'Webpage', 'Junior', 'Web', 'https://www.netatmo.com')
]



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
      <Typography variant="h6" paragraph>
        Use the filters below to narrow down the items displayed.
      </Typography>
      <Box display="flex" flexWrap="wrap"  sx={{ flexDirection: 'row' }} >
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
            <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 1 }}>{section}</Typography>
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
