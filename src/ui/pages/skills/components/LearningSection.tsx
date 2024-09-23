import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import REACTLogo from "../../../../assets/react.png";
import { Image } from "@ui";

const LearningSection: FC = () => {
  return (
    <SkillsAndXpItem title="Learning">
      <Image imageSrc={REACTLogo} alt="React-Logo" />
    </SkillsAndXpItem>
  );
};

export default LearningSection;
