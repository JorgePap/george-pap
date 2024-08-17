import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Typography } from "@ui";
import { FC } from "react";

export const HeroSection: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="md:pt-[150px] lg:pt-[180px] flex flex-col text-wrap ">
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
      {/* Scroll down Starts */}
      <div className="flex justify-between md:pb-[50px] lg:pb-[50px]">
        <div onClick={onClick}>
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.BUTTON_SM}
            text="Scroll down"
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
