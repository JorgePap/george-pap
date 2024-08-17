import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography, Typography } from "@ui";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const RoutingButton: FC<{
  to: string;
  text: string;
  left: boolean;
}> = ({ to, text, left }) => {
  return (
    <div className="group hidden md:block">
      <div
        className={`flex flex-col md:w-[105px] lg:w-[115px] 
          justify-center items-center gap-md px-lg 
          fixed h-screen top-[0px] bottom-[0px] 
          h-full bg-white dark:bg-dark-1 rounded-l-lg z-0
          ${left ? "left-[0px]" : "right-[0px]"}`}
      >
        <Iconography
          icon={ICONS.CLOSE}
          width="24"
          height="24"
          classes="stroke-dark-1 dark:stroke-neutral-1"
        />
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H6}
          text={text}
        />
      </div>

      <NavLink
        to={to}
        replace
        className={`flex flex-col md:w-[105px] lg:w-[115px] 
              justify-center items-center gap-md px-lg bg-white dark:bg-[#6272A4]
              fixed h-screen top-[0px] bottom-[0px] transform
              ease-in-out duration-200 group-hover:translate-x-[0px]
              group-hover:z-10
              ${
                left
                  ? "left-[0px] translate-x-[-100%] rounded-r-lg"
                  : "right-[0px] translate-x-[100%] rounded-l-lg"
              }`}
      >
        <Iconography
          icon={ICONS.CLOSE}
          width="24"
          height="24"
          classes="stroke-dark-1 dark:stroke-neutral-1"
        />
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H6}
          text={text}
        />
      </NavLink>
    </div>
  );
};

export default RoutingButton;
