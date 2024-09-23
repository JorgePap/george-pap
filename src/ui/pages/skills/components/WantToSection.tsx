import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import NextJsLogo from "../../../../assets/nextjs.png";
import ThreeJsLogo from "../../../../assets/three-js-icon.png";
import { Image } from "@ui";

const WantToSection: FC = () => {
  return (
    <SkillsAndXpItem title="Want To">
      <Image imageSrc={NextJsLogo} alt="NextJS-Logo" />
      <Image
        imageSrc={ThreeJsLogo}
        alt="NextJS-Logo"
        className="bg-white dark:bg-neutral-1 rounded-md"
      />
    </SkillsAndXpItem>
  );
};

export default WantToSection;
