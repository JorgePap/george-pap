import { FC } from "react";
import { CustomNavLink } from "../nav-link";
import { PATHS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const AllLinks: FC<{
  className?: string;
  typographyElement: TYPOGRAPHY_ELEMENT;
  typographyVariant: TYPOGRAPHY_VARIANT;
}> = ({ className, typographyElement, typographyVariant }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      <CustomNavLink
        to={PATHS.HOME}
        title={t("home", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.PORTFOLIO}
        title={t("portfolio", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.SKILLS}
        title={t("skills", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
      <CustomNavLink
        to={PATHS.CONTACT}
        title={t("contact", { ns: NAVBAR })}
        typographyElement={typographyElement}
        typographyVariant={typographyVariant}
      />
    </div>
  );
};

export default AllLinks;
