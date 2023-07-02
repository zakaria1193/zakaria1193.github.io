import { useState } from "react";

import { EducationItem, EducationDescription } from "../EducationItem";

import { ExpandingChips, chipClickHandler } from "../../HelpChips";

import gatech_logo from "../../../../assets/georgia_tech_extended_logo.png";

const ExpandingChipsGatech = [
  {
    key: "toto",
    label: "Why?",
    additionalText: "Why not?",
  },
];

const GaTech = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  const state = { selectedChip, setSelectedChip };

  const handleChipClick = chipClickHandler(ExpandingChipsGatech, state);

  return (
    <EducationItem
      logo={gatech_logo}
      school="Georgia Institute of Technology"
      school_help_label="Why?"
      degree="Master of Science in Electrical and Computer Engineering"
      start="2015"
      end="2016"
      location="Atlanta, GA, USA"
      chipToSelect={ExpandingChipsGatech[0]}
      handleChipClick={handleChipClick}
    >
      <EducationDescription>
        Coursework focused on sensor networks, controls systems and autonomous
        robotics.
        <br /> Minor in mechanical engineering.
      </EducationDescription>

      <ExpandingChips
        list_={ExpandingChipsGatech}
        selectedChip={selectedChip}
        handleChipClick={handleChipClick}
      />
    </EducationItem>
  );
};

export default GaTech;
