import { FC } from "react";
import SkillsAndXpItem from "./SkillsAndXpItem";
import JsLogo from "../../../../assets/js.png";
import TSLogo from "../../../../assets/typescript.png";
import REACTLogo from "../../../../assets/react.png";
import CSSLogo from "../../../../assets/css.png";
import HTMLLogo from "../../../../assets/html.png";
import GITLogo from "../../../../assets/git.png";
import FIGMALogo from "../../../../assets/figma.png";
import { Image } from "@ui";
import { useTranslation } from "react-i18next";
import { SKILLS } from "@translations";

const XpSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SkillsAndXpItem title={t("experience", { ns: SKILLS })}>
      <Image imageSrc={JsLogo} alt="JS-Logo" />
      <Image imageSrc={TSLogo} alt="TS-Logo" />
      <Image imageSrc={REACTLogo} alt="TS-Logo" />
      <Image imageSrc={CSSLogo} alt="CSS3-Logo" />
      <Image imageSrc={HTMLLogo} alt="HTML5-Logo" />
      <Image imageSrc={GITLogo} alt="GIT-Logo" />
      <Image imageSrc={FIGMALogo} alt="GIT-Logo" />
    </SkillsAndXpItem>
  );
};

export default XpSection;
