import { TYPOGRAPHY_ELEMENT, ITypography } from "@domain";
import { FC } from "react";
import { typographyVariations } from "../css-variations";

/* TODO Add Line Height as variable and also check font sizes on break points.. maybe we need to config them */
export const Typography: FC<ITypography> = ({
  element,
  text,
  variant,
  classes,
  children,
  color = "text-dark-1 dark:text-neutral-1",
  loading = false,
}) => {
  const Tag: TYPOGRAPHY_ELEMENT = element;

  if (loading)
    return (
      <div
        className={`max-w-sm animate-pulse h-3 bg-neutral-1 rounded-full dark:bg-neutral-2 w-[15%]`}
      ></div>
    );

  return (
    <Tag
      className={`${typographyVariations({
        variant,
        classes,
      })} ${color}`}
    >
      {text ?? children}
    </Tag>
  );
};

export default Typography;
