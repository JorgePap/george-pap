import { FC, useEffect, useRef, useState } from "react";
import { Typography } from "../../typography";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Iconography } from "../../iconography";
import ButtonMoreContent from "./ButtonMoreContent";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const ButtonMore: FC<{
  toogleTheme: () => void;
  darkMode: boolean;
}> = ({ toogleTheme, darkMode }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toogleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col md:items-start p-md relative">
      <div
        onClick={toogleButton}
        className="flex items-center justify-center gap-xs"
      >
        <Typography
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H5}
          text={t("more", { ns: NAVBAR })}
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
        <div ref={modalRef}>
          <ButtonMoreContent toogleTheme={toogleTheme} darkMode={darkMode} />
        </div>
      )}
    </div>
  );
};

export default ButtonMore;
