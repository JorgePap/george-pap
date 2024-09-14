import { FC } from "react";
import { RoutingButton, Typography } from "@ui";
import { ICONS, PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FormSection, LinksSection } from "./components";

export const ContactPage: FC = () => {
  return (
    <div
      className="h-dvh pt-[80px] md:pt-[110px] lg:pt-[140px] px-[30px] md:px-[115px] 
    lg:px-[125px] pb-[40px] md:pb-[80px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <div>
          <Typography
            element={TYPOGRAPHY_ELEMENT.H3}
            variant={TYPOGRAPHY_VARIANT.TITLE}
            text="Contact"
            color="text-transparent text-stroke-black dark:text-stroke-white"
          />
        </div>
        <div className="flex flex-col self-center items-center gap-lg w-full">
          <LinksSection />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1_BOLD}
            text="or"
          />
          <FormSection />
        </div>
      </div>

      <RoutingButton
        to={PATHS.SKILLS}
        text={"Skills"}
        left={true}
        routeIcon={ICONS.ARROW_LEFT}
      />
    </div>
  );
};

export default ContactPage;

//Thank you for reaching out to me. I will get back to you soon
