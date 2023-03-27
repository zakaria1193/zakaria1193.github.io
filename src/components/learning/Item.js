import React from 'react';
import Box from '@mui/material/Box';
import { types, formats, difficultyLevels, sections } from './FilterLists';
import SmartLinkChip from '../helpers/SmartLinkChip';

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

function Item({ item  }) {
  return (
    <Box display="flex" flexWrap="wrap">
      <SmartLinkChip url={item.url} name={item.name} />
    </Box>
  );
}

export { Item, item }
