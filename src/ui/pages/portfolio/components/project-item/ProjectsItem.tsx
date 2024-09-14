import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { CSSProperties, FC, useState } from "react";
import { Iconography, Typography } from "@ui";
import ShowMoreSection from "./ShowMoreSection";

export const ProjectsItem: FC<{
  title: string;
  text: string;
  techNames: string[];
  classes?: string;
  style?: CSSProperties | undefined;
}> = ({ title, text, techNames, classes, style }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`min-w-[290px] min-h-[290px] lg:min-w-[400px] lg:min-h-[350px] border border-dark-1 dark:border-neutral-1
                     rounded-lg relative ${classes}`}
      style={style}
    >
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
          <div className={`${showMore && "rotate-180"}`}>
            <Iconography
              icon={ICONS.ARROW_UP}
              width="18"
              height="18"
              classes="stroke-dark-1 dark:stroke-neutral-1"
              onClick={toggleShowMore}
            />
          </div>
        </div>
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={text}
          classes="text-dark-1 dark:text-neutral-1"
        />
        {showMore && (
          <div>
            <ShowMoreSection techNames={techNames} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsItem;
