import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../../typography";

export const CustomNavLink: FC<{
  className?: string;
  activeClassName?: string;
  to: string;
  title: string;
  typographyElement: TYPOGRAPHY_ELEMENT;
  typographyVariant: TYPOGRAPHY_VARIANT;
}> = ({
  className,
  activeClassName,
  to,
  title,
  typographyElement,
  typographyVariant,
}) => {
  return (
    <NavLink to={to}>
      {({ isActive }) =>
        isActive ? (
          <div
            className={`p-md bg-neutral-2 dark:bg-[#6272A4] rounded-lg ${activeClassName}`}
          >
            <Typography
              element={typographyElement}
              variant={typographyVariant}
              text={title}
            />
          </div>
        ) : (
          <div className={`p-md ${className}`}>
            <Typography
              element={typographyElement}
              variant={typographyVariant}
              text={title}
            />
          </div>
        )
      }
    </NavLink>
  );
};

export default CustomNavLink;
