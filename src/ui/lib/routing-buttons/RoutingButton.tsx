import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography, Typography } from "@ui";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const RoutingButton: FC<{
  to: string;
  text: string;
  left: boolean;
  routeIcon: ICONS;
}> = ({ to, text, left, routeIcon }) => {
  return (
    <div className="group hidden md:block">
      <div
        className={`flex flex-col md:w-[100px] lg:w-[125px] xl:w-[140px]
          justify-center items-center gap-md px-lg 
          fixed h-screen top-[0px] bottom-[0px] 
          h-full neutral-1 dark:bg-dark-1 rounded-l-lg z-40
          ${left ? "left-[0px]" : "right-[0px]"}`}
      >
        <Iconography
          icon={routeIcon}
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
        className={`flex flex-col md:w-[100px] lg:w-[125px] xl:w-[140px]
              justify-center items-center gap-md px-lg bg-neutral-5 dark:bg-[#6272A4]
              fixed h-screen top-0 bottom-0 transform z-50
              ease-in-out duration-200 group-hover:translate-x-[0px]
              ${
                left
                  ? "left-[0px] translate-x-[-100%] rounded-r-lg"
                  : "right-[0px] translate-x-[100%] rounded-l-lg"
              }`}
      >
        <Iconography
          icon={routeIcon}
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
