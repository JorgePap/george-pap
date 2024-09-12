import { FC } from "react";
import { RoutingButton, Typography } from "@ui";
import { ICONS, PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FormSection, LinksSection } from "./components";

export const ContactPage: FC = () => {
  return (
    <div
      className="h-dvh pt-[80px] md:pt-[110px] lg:pt-[140px] px-[30px] md:px-[115px] 
    lg:px-[125px] overflow-x-hidden relative"
    >
      <div className="flex flex-col gap-2xl">
        <div>
          <Typography
            element={TYPOGRAPHY_ELEMENT.H3}
            variant={TYPOGRAPHY_VARIANT.TITLE}
            text="Contact"
            color="text-transparent"
          />
        </div>
        <div className="flex flex-col self-center items-center gap-lg">
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
