import { Box, Typography } from "@mui/material";

import { sections } from "./FilterLists";
import { Item } from "./Item";

function getItemsBySection(section, items) {
  return items.filter((item) => item.section === section);
}

function getItemsBySubsection(section, subsection, items) {
  return items.filter(
    (item) => item.section === section && item.subsection === subsection
  );
}

// As opposed to sections, subsections are not hardcoded
// Generate subsections from items list
function generateSubsections(items) {
  const subsections = [];

  items.forEach((item) => {
    if (item.subsection && !subsections.includes(item.subsection)) {
      subsections.push(item.subsection);
    }
  });

  return subsections;
}

function Subsection({ section_title, subsection_title, filteredItems }) {
  let items = getItemsBySubsection(
    section_title,
    subsection_title,
    filteredItems
  );

  return (
    <Box>
      <Typography variant="h8" sx={{ marginTop: 4, marginBottom: 4 }}>
        {subsection_title}
      </Typography>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </Box>
  );
}

function Section({ section_title, filteredItems }) {
  let sectionItems = getItemsBySection(section_title, filteredItems);

  return (
    <Box>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>
        {section_title}
      </Typography>
      {
        // Display items without subsections first
        sectionItems
          .filter((item) => !item.subsection)
          .map((item) => (
            <Item key={item.name} item={item} />
          ))
      }
      {
        // Print subsections
        generateSubsections(sectionItems).map((subsection) => (
          <Subsection
            key={subsection}
            section_title={section_title}
            subsection_title={subsection}
            filteredItems={sectionItems}
          />
        ))
      }
    </Box>
  );
}

export default Section;
