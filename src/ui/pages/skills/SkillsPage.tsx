import { ICONS, PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { RoutingButton, Typography } from "@ui";
import { FC } from "react";
import { SkillsAndXpSection } from "./components";
import { useTranslation } from "react-i18next";
import { NAVBAR, SKILLS } from "@translations";

export const SkillsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-dvh pt-[80px] md:pt-[110px] lg:pt-[140px] px-[30px] md:px-[115px]
                 lg:px-[130px] xl:px-[150px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <div>
          <Typography
            element={TYPOGRAPHY_ELEMENT.H3}
            variant={TYPOGRAPHY_VARIANT.TITLE}
            text={t("skillsAndExperience", { ns: SKILLS })}
            color="text-transparent text-stroke-black dark:text-stroke-white"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2xl">
          <SkillsAndXpSection className="md:basis-1/2" />
          <div className="md:basis-1/2 flex flex-col gap-xl pr-2xl">
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.P1}
              text={t("textOne", { ns: SKILLS })}
            />
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.P1}
              text={t("textTwo", { ns: SKILLS })}
            />
          </div>
        </div>
      </div>

      <RoutingButton
        to={PATHS.PORTFOLIO}
        text={t("portfolio", { ns: NAVBAR })}
        left={true}
        routeIcon={ICONS.ARROW_LEFT}
      />
      <RoutingButton
        to={PATHS.CONTACT}
        text={t("contact", { ns: NAVBAR })}
        left={false}
        routeIcon={ICONS.ARROW_RIGHT}
      />
    </div>
  );
};

export default SkillsPage;
