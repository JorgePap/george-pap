import { FC } from "react";
import { RoutingButton } from "@ui";
import { PATHS } from "@domain";

export const ContactPage: FC = () => {
  return (
    <div className="h-dvh md:pt-[150px] md:px-[110px] lg:px-[120px] overflow-x-hidden relative">
      <RoutingButton to={PATHS.SKILLS} text={"Skills"} left={true} />
      ContactPage
    </div>
  );
};

export default ContactPage;