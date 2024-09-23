import { FC } from "react";
import {
  ICONS,
  LANGUAGES,
  TYPOGRAPHY_ELEMENT,
  TYPOGRAPHY_VARIANT,
} from "@domain";
import { Iconography, Typography } from "@ui";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";
import i18next from "i18next";

export const ButtonOptions: FC<{
  toogleLanguageContent: () => void;
  toogleTheme: () => void;
  darkMode: boolean;
}> = ({ toogleLanguageContent, toogleTheme, darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-sm">
      <div
        onClick={toogleLanguageContent}
        className="flex w-full justify-between md:min-w-[200px] items-center hover:bg-neutral-3 dark:bg-[#454158] rounded-lg p-xs cursor-pointer"
      >
        {i18next.language === LANGUAGES.EN ? (
          <Iconography
            icon={ICONS.AMERICAN_FLAG}
            classes="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
          />
        ) : (
          <Iconography
            icon={ICONS.GREEK_FLAG}
            classes="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
          />
        )}
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={t("languages", { ns: NAVBAR })}
        />
        <Iconography
          icon={ICONS.ARROW_RIGHT}
          width="18"
          height="18"
          classes="w-[30px] h-[30px] stroke-dark-1 dark:stroke-neutral-1"
        />
      </div>
      <div
        onClick={toogleTheme}
        className="flex w-full justify-between md:min-w-[200px] items-center hover:bg-neutral-3 bg-neutral-2 dark:bg-[#454158] rounded-lg p-xs cursor-pointer"
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
          text={t("theme", { ns: NAVBAR })}
        />
        <Iconography
          icon={ICONS.THEME_CHANGE_ICON}
          classes="fill-dark-1 dark:fill-neutral-1 w-[30px] h-[30px]"
        />
      </div>
    </div>
  );
};

export default ButtonOptions;
