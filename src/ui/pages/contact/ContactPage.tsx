import { FC } from "react";
import { RoutingButton } from "@ui";
import { PATHS } from "@domain";

export const ContactPage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] md:px-[115px] lg:px-[125px] overflow-x-hidden relative">
      <RoutingButton to={PATHS.SKILLS} text={"Skills"} left={true} />
      ContactPage
    </div>
  );
};

export default ContactPage;
