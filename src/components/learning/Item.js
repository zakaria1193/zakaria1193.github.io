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
  static chipLocationMarker = '{{chipLocation}}';

  constructor(name, type, format, difficultyLevel, section, url, sentence) {
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

    this.sentence = sentence || "{{chipLocation}}"
  }
}

function Item({ item }) {
  const { sentence } = item;
  const parts = sentence.split(item.constructor.chipLocationMarker);

  return (
    <Box display="flex" flexWrap="wrap">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <SmartLinkChip url={item.url} name={item.name} />}
        </React.Fragment>
      ))}
    </Box>
  );
}

export { Item, item }
