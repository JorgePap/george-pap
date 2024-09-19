import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Typography } from "@ui";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import HoverText from "./HoverText";
import { HOME } from "@translations";

export const HeroSection: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="pt-[80px] md:pt-[120px] lg:pt-[120px] flex flex-col text-wrap">
        <HoverText text={t("hello", { ns: HOME })} />
        <HoverText text={t("iAmGeorge", { ns: HOME })} />
        <HoverText text={t("lastName", { ns: HOME })} />
      </div>
      {/* Scroll down Starts */}
      <div className="flex justify-between pb-[30px] md:pb-[50px] lg:pb-[50px]">
        <div onClick={onClick}>
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.BUTTON_SM}
            text="Scroll down"
            classes="cursor-pointer"
          />
        </div>
        <Typography
          element={TYPOGRAPHY_ELEMENT.LABEL}
          variant={TYPOGRAPHY_VARIANT.LABEL}
          text="Front-end Developer"
        />
      </div>
      {/* Scroll down Ends */}
    </div>
  );
};

export default HeroSection;
