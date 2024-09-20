import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import JsLogo from "../../../../assets/JS-logo.png";
import REACTLogo from "../../../../assets/react.png";
import { Image } from "@ui";

const LearningSection: FC = () => {
  return (
    <SkillsAndXpItem title="Learning">
      <Image imageSrc={REACTLogo} alt="React-Logo" />
      <Image imageSrc={JsLogo} alt="JS-Logo" />
      <Image imageSrc={JsLogo} alt="JS-Logo" />
    </SkillsAndXpItem>
  );
};

export default LearningSection;
