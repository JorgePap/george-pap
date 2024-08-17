import { FC } from "react";
import { Typography } from "@ui";
import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";

export const TechItem: FC<{ techName: string }> = ({ techName }) => {
  return (
    <div className="py-sm px-md w-max bg-neutral-1 dark:bg-[#444057] rounded-full">
      <Typography
        element={TYPOGRAPHY_ELEMENT.P}
        variant={TYPOGRAPHY_VARIANT.P1}
        text={techName}
      />
    </div>
  );
};

export default TechItem;
