import { FC, useState } from "react";
import { Typography } from "../../typography";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography } from "../../iconography";

export const ButtonMoreContent: FC<{ toogleTheme?: () => void }> = ({
  toogleTheme,
}) => {
  const [languageIsOpen, setLanguageIsOpen] = useState(false);

  const toogleLanguage = () => {
    setLanguageIsOpen(!languageIsOpen);
  };

  return (
    <div className="flex flex-col max-w-[300px] mx-auto gap-md md:absolute md:top-[50px] md:left-[0px] md:translate-x-[-25%] dark:bg-[#2D2A39] p-sm rounded-lg">
      <div className="flex">
        {languageIsOpen && (
          <Iconography
            icon={ICONS.ARROW_LEFT}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
        )}
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text="Options"
          classes="text-dark-1 dark:text-light-2"
        />
      </div>
      <div className="flex w-full flex-col gap-sm">
        <div
          onClick={toogleLanguage}
          className="flex w-full justify-between md:min-w-[200px] items-center dark:bg-[#454158] rounded-lg p-xs"
        >
          <Iconography
            icon={ICONS.CLOSE}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="Language"
          />
          <Iconography
            icon={ICONS.ARROW_RIGHT}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
        </div>
        <div
          onClick={toogleTheme}
          className="flex w-full justify-between md:min-w-[200px] items-center dark:bg-[#454158] rounded-lg p-xs"
        >
          <Iconography
            icon={ICONS.CLOSE}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="Theme"
          />
          <Iconography
            icon={ICONS.CLOSE}
            width="18"
            height="18"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonMoreContent;
