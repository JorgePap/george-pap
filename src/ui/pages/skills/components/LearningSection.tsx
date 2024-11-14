import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import REACTLogo from "../../../../assets/react.png";
import { Image } from "@ui";
import { useTranslation } from "react-i18next";
import { SKILLS } from "@translations";

const LearningSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SkillsAndXpItem title={t("learning", { ns: SKILLS })}>
      <Image imageSrc={REACTLogo} alt="React-Logo" />
    </SkillsAndXpItem>
  );
};

export default LearningSection;
