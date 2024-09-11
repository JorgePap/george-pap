import { FC, useState } from "react";
import { Typography } from "../../typography";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography } from "../../iconography";
import ButtonMoreContent from "./ButtonMoreContent";

export const ButtonMore: FC<{
  toogleTheme?: () => void;
  darkMode: boolean;
}> = ({ toogleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:items-start p-md relative">
      <div
        onClick={toogleButton}
        className="flex items-center justify-center gap-xs"
      >
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H5}
          text="More"
          color="text-[light-1] dark:text-[#C2C3C0]"
        />
        {!isOpen && (
          <Iconography
            icon={ICONS.ARROW_DOWN}
            width="24"
            height="24"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
        )}
        {isOpen && (
          <Iconography
            icon={ICONS.ARROW_UP}
            width="24"
            height="24"
            classes="stroke-dark-1 dark:stroke-neutral-1"
          />
        )}
      </div>

      {isOpen && (
        <div>
          <ButtonMoreContent toogleTheme={toogleTheme} darkMode={darkMode} />
        </div>
      )}
    </div>
  );
};

export default ButtonMore;
