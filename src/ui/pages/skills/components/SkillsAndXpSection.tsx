import { FC } from "react";
import XpSection from "./XpSection";
import LearningSection from "./LearningSection";
import WantToSection from "./WantToSection";

export const SkillsAndXpSection: FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={`flex flex-col gap-xl ${className}`}>
      <XpSection />
      <LearningSection />
      <WantToSection />
    </div>
  );
};

export default SkillsAndXpSection;
