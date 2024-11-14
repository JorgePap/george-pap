import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import NextJsLogo from "../../../../assets/nextjs.png";
import ThreeJsLogo from "../../../../assets/three-js-icon.png";
import { Image } from "@ui";
import { useTranslation } from "react-i18next";
import { SKILLS } from "@translations";

const WantToSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SkillsAndXpItem title={t("wantTo", { ns: SKILLS })}>
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
