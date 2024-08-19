import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC, ReactNode } from "react";
import { Typography } from "@ui";

export const SkillsAndXpItem: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col gap-md">
      <Typography
        element={TYPOGRAPHY_ELEMENT.H5}
        variant={TYPOGRAPHY_VARIANT.H5}
        text={title}
      />
      <div className="flex flex-wrap gap-sm ">{children}</div>
    </div>
  );
};

export default SkillsAndXpItem;
