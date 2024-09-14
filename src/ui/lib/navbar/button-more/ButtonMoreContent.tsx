import { FC, useState } from "react";
import { Typography } from "../../typography";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography } from "../../iconography";

export const ButtonMoreContent: FC<{
  toogleTheme?: () => void;
  darkMode: boolean;
}> = ({ toogleTheme, darkMode }) => {
  const [languageIsOpen, setLanguageIsOpen] = useState(false);

  const toogleLanguage = () => {
    setLanguageIsOpen(!languageIsOpen);
  };

  return (
    <div
      className="flex flex-col max-w-[300px] mx-auto gap-md md:absolute md:top-[50px]
                    md:left-[0px] md:translate-x-[-25%] dark:bg-[#2D2A39] p-sm rounded-lg
                    lg:top-[58px] xl:top-[67px]"
    >
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
            icon={ICONS.AMERICAN_FLAG}
            classes="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
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
          {darkMode ? (
            <Iconography
              icon={ICONS.SUN}
              classes="fill-[#fcdb33] w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
            />
          ) : (
            <Iconography
              icon={ICONS.MOON}
              classes="fill-[#fcdb33] w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
            />
          )}

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
