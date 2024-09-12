import { ICONS, PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { RoutingButton, Typography } from "@ui";
import { FC } from "react";
import { ProjectsSection } from "./components";

export const PortfolioPage: FC = () => {
  return (
    <div
      className="h-dvh pt-[80px] md:pt-[110px] lg:pt-[140px] px-[30px] md:px-[115px] 
                    lg:px-[125px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.TITLE}
          text="Portfolio"
          color="text-transparent"
        />
        <ProjectsSection />
      </div>
      <RoutingButton
        to={PATHS.HOME}
        text={"Home"}
        left={true}
        routeIcon={ICONS.ARROW_LEFT}
      />
      <RoutingButton
        to={PATHS.SKILLS}
        text={"Skills"}
        left={false}
        routeIcon={ICONS.ARROW_RIGHT}
      />
    </div>
  );
};

export default PortfolioPage;
