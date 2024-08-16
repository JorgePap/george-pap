import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { RoutingButton, Typography } from "@ui";

export const HomePage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] lg:pt-[180px] md:px-[110px] lg:px-[120px] overflow-x-hidden relative">
      <div className="h-[100%]">
        {/* hero with Scroll down starts*/}
        <div className="flex flex-col h-[100%] justify-between xl:pb-[100px] ">
          <div className="flex flex-col text-wrap">
            <Typography
              element={TYPOGRAPHY_ELEMENT.H3}
              variant={TYPOGRAPHY_VARIANT.H1}
              text="Hello,"
              classes="tracking-tight"
            />
            <Typography
              element={TYPOGRAPHY_ELEMENT.H3}
              variant={TYPOGRAPHY_VARIANT.H1}
              text="I'm George Papastergiopoulos"
              classes="tracking-tighter"
            />
          </div>
          <div className="flex justify-between">
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.BUTTON_SM}
              text="Scroll down"
            />
            <Typography
              element={TYPOGRAPHY_ELEMENT.LABEL}
              variant={TYPOGRAPHY_VARIANT.LABEL}
              text="Front-end Developer"
            />
          </div>
        </div>
        {/* hero with Scroll down ends*/}

        <div>Me text and picture+resume</div>
      </div>
      <RoutingButton to={PATHS.PORTFOLIO} text={"Portfolio"} left={false} />
    </div>
  );
};

export default HomePage;
