import {
  EducationItem,
  EducationDescription,
  ExpandingChips,
} from "../EducationItem";
import enseeiht_logo from "../../../../assets/enseeiht_logo.png";

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
        Major in electrical and automation engineering.
      </EducationDescription>
    </EducationItem>
  );
};

export default ENSEEIHT;
