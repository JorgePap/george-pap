import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import NextJsLogo from "../../../../assets/nextjs.png";
import NodeLogo from "../../../../assets/node.png";
import { Image } from "@ui";

const WantToSection: FC = () => {
  return (
    <SkillsAndXpItem title="Want To">
      <Image imageSrc={NextJsLogo} alt="NextJS-Logo" />
      <Image imageSrc={NodeLogo} alt="Node-Logo" />
    </SkillsAndXpItem>
  );
};

export default WantToSection;
