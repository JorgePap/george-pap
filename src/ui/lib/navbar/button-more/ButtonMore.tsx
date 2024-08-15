import { FC, useState } from "react";
import { Typography } from "../../typography";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography } from "../../iconography";
import ButtonMoreContent from "./ButtonMoreContent";

export const ButtonMore: FC<{ toogleTheme?: () => void }> = ({
  toogleTheme,
}) => {
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
        <Iconography
          icon={ICONS.CLOSE}
          width="24"
          height="24"
          classes="stroke-dark-1 dark:stroke-neutral-1"
        />
      </div>

      {isOpen && (
        <div>
          <ButtonMoreContent toogleTheme={toogleTheme} />
        </div>
      )}
    </div>
  );
};

export default ButtonMore;
