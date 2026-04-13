import { EducationItem } from "../EducationItem";
import { BulletList, BulletItem } from "../../Experience/ExperienceItem";
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
      <BulletList>
        <BulletItem>Major in electrical and automation engineering.</BulletItem>
      </BulletList>
    </EducationItem>
  );
};

export default ENSEEIHT;
