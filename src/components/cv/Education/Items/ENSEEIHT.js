import {
  EducationItem,
  EducationDescription,
  ExpandingChips,
} from "../EducationItem";
import enseeiht_logo from "../../../../assets/enseeiht_logo.png";

const ExpandingChipsGatech = [
  {
    key: "toto",
    label: "Why?",
    additionalText: "Why not?",
  },
];

const ENSEEIHT = () => {
  return (
    <EducationItem
      logo={enseeiht_logo}
      school="Ecole national superieur d'électrique, d'électrotechnique, d'informatique, d'hydraulique et des télecommunications"
      degree="French Engineering degree"
      start="2012"
      end="2015"
      location="Toulouse, France"
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

export default ENSEEIHT;
