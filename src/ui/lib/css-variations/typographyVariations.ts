import { ITypography, TYPOGRAPHY_VARIANT } from "@domain";

export const typographyVariations = ({
  variant = TYPOGRAPHY_VARIANT.P1,
  classes = "",
}: Pick<ITypography, "variant" | "classes">) => {
  const tv = TYPOGRAPHY_VARIANT;

  //TODO Add colors
  //TODO Add font Style
  const variants: Record<TYPOGRAPHY_VARIANT, string> = {
    [tv.TITLE]: "font-title text-3xl font-regular",
    [tv.H1]: "font-heading text-4xl font-regular",
    [tv.H2]: "font-heading text-3xl font-regular",
    [tv.H3]: "font-heading text-2xl font-regular",
    [tv.H4]: "font-heading text-xl font-regular",
    [tv.H5]: "font-heading text-lg font-regular",
    [tv.H6]: "font-heading text-md font-regular",
    [tv.P1]: "font-paragraph text-base font-regular",
    [tv.P1_MEDIUM]: "font-paragraph font-regular text-base",
    [tv.P1_BOLD]: "font-paragraph font-bold text-base",
    [tv.P2]: "font-paragraph text-sm font-regular",
    [tv.P2_MEDIUM]: "font-paragraph font-regular text-sm",
    [tv.P2_BOLD]: "font-paragraph font-bold text-sm",
    [tv.P3]: "font-paragraph text-xs font-regular",
    [tv.P3_MEDIUM]: "font-paragraph font-regular text-xs",
    [tv.P3_BOLD]: "font-paragraph font-bold text-xs",
    [tv.NAV]: "font-paragraph font-regular text-2xl lg:text-base",
    [tv.LABEL]: "font-heading uppercase text-md",
    [tv.INPUT]: "font-paragraph font-regular text-base",
    [tv.BUTTON]: "font-paragraph font-bold text-md text-black",
    [tv.BUTTON_SM]: "font-paragraph font-bold text-base text-black",
  };

  return `${classes} ${variants[variant]}`; //TODO Maybe parse them through function to trim empty spaces
};
