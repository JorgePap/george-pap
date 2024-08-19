import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { RoutingButton, Typography } from "@ui";
import { FC } from "react";
import { SkillsAndXpSection } from "./components";

export const SkillsPage: FC = () => {
  return (
    <div
      className="h-dvh md:pt-[110px] lg:pt-[140px] md:px-[115px] 
                    lg:px-[125px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <div>
          <Typography
            element={TYPOGRAPHY_ELEMENT.H3}
            variant={TYPOGRAPHY_VARIANT.TITLE}
            text="Skills &amp; XP"
            color="text-transparent"
          />
        </div>
        <div className="flex">
          <SkillsAndXpSection className="basis-1/2" />
          <div className="basis-1/2 flex flex-col gap-xl pr-2xl">
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.P1}
              text="Since I started my journey as a Front-end student
              almost 3 years ago, I have learned a lot about and done
              some good personal projects and now I am looking for an
              opportunity to use what I have learned and learn more with
              a good team."
            />
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.P1}
              text="All my projects are available on my Github profile
                and if you think I can be part of your team and we can
                team up you can contact me on my likedin profile."
            />
          </div>
        </div>
      </div>

      <RoutingButton to={PATHS.PORTFOLIO} text={"Portfolio"} left={true} />
      <RoutingButton to={PATHS.CONTACT} text={"Contact"} left={false} />
    </div>
  );
};

export default SkillsPage;
