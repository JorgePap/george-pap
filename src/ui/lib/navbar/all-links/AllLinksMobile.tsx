import { FC } from "react";
import { CustomNavLink } from "../nav-link";
import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const AllLinksNavBar: FC<{
  className?: string;
  typographyElement: TYPOGRAPHY_ELEMENT;
  typographyVariant: TYPOGRAPHY_VARIANT;
  toggleMobileNav: () => void;
}> = ({ className, typographyElement, typographyVariant, toggleMobileNav }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      <CustomNavLink
        to={PATHS.HOME}
        onClick={toggleMobileNav}
        title={t("home", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.PORTFOLIO}
        onClick={toggleMobileNav}
        title={t("portfolio", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.SKILLS}
        onClick={toggleMobileNav}
        title={t("Skills", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.CONTACT}
        onClick={toggleMobileNav}
        title={t("Contact", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
    </div>
  );
};

export default AllLinksNavBar;
