import { FC } from "react";
import { CustomNavLink } from "../nav-link";
import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";

export const AllLinks: FC<{
  className?: string;
  typographyElement: TYPOGRAPHY_ELEMENT;
  typographyVariant: TYPOGRAPHY_VARIANT;
}> = ({ className, typographyElement, typographyVariant }) => {
  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      <CustomNavLink
        to={PATHS.HOME}
        title={"Home"}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.PORTFOLIO}
        title={"Portfolio"}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.SKILLS}
        title={"Skills"}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.CONTACT}
        title={"Contact"}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
    </div>
  );
};

export default AllLinks;
