import { ICONS, PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { RoutingButton, Typography } from "@ui";
import { FC } from "react";
import { ProjectsSection } from "./components";
import { useTranslation } from "react-i18next";
import { NAVBAR, PORTFOLIO } from "@translations";

export const PortfolioPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-dvh pt-[80px] md:pt-[110px] lg:pt-[140px] px-[30px] md:px-[115px] 
                 lg:px-[130px] xl:px-[150px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.TITLE}
          text={t("portfolio", { ns: PORTFOLIO })}
          color="text-transparent text-stroke-black dark:text-stroke-white"
        />
        <ProjectsSection />
      </div>
      <RoutingButton
        to={PATHS.HOME}
        text={t("home", { ns: NAVBAR })}
        left={true}
        routeIcon={ICONS.ARROW_LEFT}
      />
      <RoutingButton
        to={PATHS.SKILLS}
        text={t("skills", { ns: NAVBAR })}
        left={false}
        routeIcon={ICONS.ARROW_RIGHT}
      />
    </div>
  );
};

export default PortfolioPage;
