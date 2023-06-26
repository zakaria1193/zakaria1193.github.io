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
  return (
    <EducationItem
      logo={gatech_logo}
      school="Georgia Institute of Technology"
      degree="Master of Science in Electrical and Computer Engineering"
      start="2015"
      end="2016"
      location="Atlanta, GA, USA"
    >
      <EducationDescription>
        Coursework focused on sensor networks, controls systems and autonomous
        robotics.
        <br /> Minor in mechanical engineering.
      </EducationDescription>

      <ExpandingChips list_={ExpandingChipsGatech} />
    </EducationItem>
  );
};

export default GaTech;
