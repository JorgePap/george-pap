import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { RoutingButton, Typography } from "@ui";
import { FC } from "react";
import { ProjectsSection } from "./components";

export const PortfolioPage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] lg:pt-[180px] md:px-[115px] lg:px-[125px] overflow-x-hidden relative">
      <div className="flex flex-col gap-2xl">
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H3}
          text="Portfolio"
        />
        <ProjectsSection />
      </div>
      <RoutingButton to={PATHS.HOME} text={"Home"} left={true} />
      <RoutingButton to={PATHS.SKILLS} text={"Skills"} left={false} />
    </div>
  );
};

export default PortfolioPage;
