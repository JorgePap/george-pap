import { FC } from "react";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { Typography, Iconography } from "@ui";
import { useTranslation } from "react-i18next";
import { NAVBAR } from "@translations";

export const ChangeLanguageContent: FC<{
  changeLanguageToEnglish: () => void;
  changeLanguageToGreek: () => void;
}> = ({ changeLanguageToEnglish, changeLanguageToGreek }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-sm">
      <div
        onClick={changeLanguageToEnglish}
        className="flex w-full justify-between items-center bg-neutral-2 dark:bg-[#454158]
                        hover:bg-neutral-3 rounded-lg p-xs md:min-w-[200px] cursor-pointer"
      >
        <Iconography
          icon={ICONS.AMERICAN_FLAG}
          classes="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
        />
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={t("english", { ns: NAVBAR })}
          classes="pr-xs"
        />
      </div>
      <div
        onClick={changeLanguageToGreek}
        className="flex w-full justify-between items-center bg-neutral-2 dark:bg-[#454158]
                        hover:bg-neutral-3 rounded-lg p-xs md:min-w-[200px] cursor-pointer"
      >
        <Iconography
          icon={ICONS.GREEK_FLAG}
          classes="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
        />
        <Typography
          element={TYPOGRAPHY_ELEMENT.P}
          variant={TYPOGRAPHY_VARIANT.P1}
          text={t("greek", { ns: NAVBAR })}
          classes="pr-xs"
        />
      </div>
    </div>
  );
};

export default ChangeLanguageContent;
