import { PATHS } from "@domain";
import { RoutingButton } from "@ui";
import { FC } from "react";

export const PortfolioPage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] md:px-[110px] lg:px-[120px] overflow-x-hidden relative">
      <RoutingButton to={PATHS.HOME} text={"Home"} left={true} />
      Portfolio
      <RoutingButton to={PATHS.SKILLS} text={"Skills"} left={false} />
    </div>
  );
};

export default PortfolioPage;
