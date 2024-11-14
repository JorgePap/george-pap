import { ICONS, PATHS } from "@domain";
import { FC } from "react";
import { RoutingButton } from "@ui";
import { HeroSection } from "./components/hero-section";
import { MeSection } from "./components/me-section";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const HomePage: FC = () => {
  const { t } = useTranslation();

  const scrollByVH = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-[30px] md:px-[115px] lg:px-[130px] xl:px-[150px] overflow-x-hidden ">
      {/* Hero Section with Scroll down starts*/}
      <HeroSection onClick={scrollByVH} />
      <MeSection />
      <RoutingButton
        to={PATHS.PORTFOLIO}
        text={t("portfolio", { ns: NAVBAR })}
        left={false}
        routeIcon={ICONS.ARROW_RIGHT}
      />
    </div>
  );
};

export default HomePage;
