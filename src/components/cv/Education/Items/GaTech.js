import { useState } from "react";

import {
  EducationItem,
  EducationDescription,
  ExpandingChips,
} from "../EducationItem";
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

  const handleChipClick = ({ chip = null, chip_label = null }) => {
    if (chip === null) {
      console.error("Chip null in handleChipClick");
      // look for the chip with the label
      chip = ExpandingChipsGatech.find((chip) => chip.label === chip_label);
    } else {
      console.log("Chip in handleChipClick: ", chip);
    }

    if (selectedChip === chip) {
      setSelectedChip(null);
    } else {
      setSelectedChip(chip);
    }
  };

  return (
    <EducationItem
      logo={gatech_logo}
      school="Georgia Institute of Technology"
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
