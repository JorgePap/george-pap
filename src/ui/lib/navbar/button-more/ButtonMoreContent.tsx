import { FC, useEffect, useState } from "react";
import { Typography } from "../../typography";
import {
  ICONS,
  LANGUAGES,
  TYPOGRAPHY_ELEMENT,
  TYPOGRAPHY_VARIANT,
} from "@domain";
import { Iconography } from "../../iconography";
import i18next from "i18next";
import ButtonOptions from "./ButtonOptions";
import ChangeLanguageContent from "./ChangeLanguageContent";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const ButtonMoreContent: FC<{
  toogleTheme: () => void;
  darkMode: boolean;
}> = ({ toogleTheme, darkMode }) => {
  const { t } = useTranslation();
  const [languageIsOpen, setLanguageIsOpen] = useState(false);

  // Retrieve and set the initial language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18next.language) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  // Change language to Greek and save to localStorage
  const changeLanguageToGreek = () => {
    if (i18next.language !== LANGUAGES.GR) {
      i18next.changeLanguage(LANGUAGES.GR);
      localStorage.setItem("language", LANGUAGES.GR);
    }
  };

  // Change language to English and save to localStorage
  const changeLanguageToEnglish = () => {
    if (i18next.language !== LANGUAGES.EN) {
      i18next.changeLanguage(LANGUAGES.EN);
      localStorage.setItem("language", LANGUAGES.EN);
    }
  };

  const toogleLanguageContent = () => {
    setLanguageIsOpen(!languageIsOpen);
  };

  return (
    <div
      className="flex flex-col max-w-[300px] mx-auto gap-md md:absolute md:top-[50px]
                    md:left-[0px] md:translate-x-[-25%] bg-neutral-2 border border-neutral-4 dark:border-none dark:bg-[#2D2A39] p-sm rounded-lg
                    lg:top-[58px] xl:top-[67px]"
    >
      {languageIsOpen ? (
        <div
          onClick={toogleLanguageContent}
          className="flex items-center cursor-pointer"
        >
          <Iconography
            icon={ICONS.ARROW_LEFT}
            classes="w-[24px] h-[24px] stroke-dark-1 dark:stroke-neutral-1"
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={t("back", { ns: NAVBAR })}
            classes="text-dark-1 dark:text-light-2"
          />
        </div>
      ) : (
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={t("options", { ns: NAVBAR })}
          classes="text-dark-1 dark:text-light-2"
        />
      )}
      {!languageIsOpen ? (
        <ButtonOptions
          toogleLanguageContent={toogleLanguageContent}
          toogleTheme={toogleTheme}
          darkMode={darkMode}
        />
      ) : (
        <ChangeLanguageContent
          changeLanguageToEnglish={changeLanguageToEnglish}
          changeLanguageToGreek={changeLanguageToGreek}
        />
      )}
    </div>
  );
};

export default ButtonMoreContent;
