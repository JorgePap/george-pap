import { ReactNode } from "react";
import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "src/domain/enum";

export interface ITypography {
  element: TYPOGRAPHY_ELEMENT;
  variant: TYPOGRAPHY_VARIANT;
  text?: string;
  fontVariant?: string;
  classes?: string;
  children?: ReactNode;
  color?: string;
  loading?: boolean;
}
