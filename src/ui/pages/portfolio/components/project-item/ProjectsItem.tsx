import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC, useState } from "react";
import { Iconography, Typography } from "@ui";
import ShowMoreSection from "./ShowMoreSection";

export const ProjectsItem: FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="min-w-[290px] min-h-[290px] border border-dark-1 dark:border-neutral-1
                     rounded-lg relative"
    >
      bg img
      {/* inner box */}
      <div
        className="absolute w-full bottom-[0px] rounded-lg h-max bg-neutral-1 
                   py-sm px-md flex flex-col gap-sm dark:bg-[#2E2B3A]"
      >
        <div className="flex w-full justify-between">
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={title}
            classes="text-dark-1 dark:text-neutral-1"
          />
          <Iconography
            icon={ICONS.MENU}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
            onClick={toggleShowMore}
          />
        </div>
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={text}
          classes="text-dark-1 dark:text-neutral-1"
        />
        {showMore && (
          <div>
            <ShowMoreSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsItem;
