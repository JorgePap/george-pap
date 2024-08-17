import { PATHS } from "@domain";
import { RoutingButton } from "@ui";
import { FC } from "react";

export const SkillsPage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] md:px-[115px] lg:px-[125px] overflow-x-hidden relative">
      <RoutingButton to={PATHS.PORTFOLIO} text={"Portfolio"} left={true} />
      SkillsPage
      <RoutingButton to={PATHS.CONTACT} text={"Contact"} left={false} />
    </div>
  );
};

export default SkillsPage;
