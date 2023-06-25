import { EducationItem, EducationDescription } from "../EducationItem";
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
      <EducationDescription>
        Coursework focused on wireless networks, controls systems and robotics.{" "}
        <br /> Minor in mechanical engineering.
      </EducationDescription>
    </EducationItem>
  );
};

export default GaTech;
