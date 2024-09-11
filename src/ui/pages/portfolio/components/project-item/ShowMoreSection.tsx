import { FC } from "react";
import { Typography } from "@ui";
import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import TechItem from "./TechItem";

export const ShowMoreSection: FC<{ techNames: string[] }> = ({ techNames }) => {
  return (
    <div className="flex flex-col gap-sm dark:bg-[#2E2B3A]">
      <Typography
        element={TYPOGRAPHY_ELEMENT.H6}
        variant={TYPOGRAPHY_VARIANT.H6}
        text="Techs"
        classes="text-dark-1 dark:text-neutral-1"
      />
      <div className="flex flex-col gap-md">
        <div className="flex flex-wrap gap-xs">
          {techNames.map((techName) => (
            <TechItem techName={techName} />
          ))}
        </div>
        <div className="py-sm px-xl w-max bg-neutral-1 dark:bg-[#444057] rounded-full self-center">
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="See Project"
            classes="text-dark-1 dark:text-neutral-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowMoreSection;
