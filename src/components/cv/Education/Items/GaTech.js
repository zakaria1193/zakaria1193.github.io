import { EducationItem } from "../EducationItem";
import { BulletList, BulletItem } from "../../Experience/ExperienceItem";

import gatech_logo from "../../../../assets/georgia_tech_extended_logo.png";

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
      <BulletList>
        <BulletItem>Coursework focused on sensor networks, controls systems and autonomous robotics.</BulletItem>
        <BulletItem>Minor in mechanical engineering.</BulletItem>
      </BulletList>
    </EducationItem>
  );
};

export default GaTech;
