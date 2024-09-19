import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { Typography } from "@ui";
import MePhoto from "../../../../../assets/me.jpg";
import { useTranslation } from "react-i18next";
import { HOME } from "@translations";

export const MeSection: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-[40px] md:pt-[120px] lg:pt-[150px]">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="flex flex-col gap-xl basis-1/2">
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.H3}
            text={t("me", { ns: HOME })}
            color="text-transparent text-stroke-black dark:text-stroke-white"
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={t("meTextOne", { ns: HOME })}
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={t("meTextTwo", { ns: HOME })}
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={t("meTextThree", { ns: HOME })}
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text={t("meTextFour", { ns: HOME })}
          />
        </div>

        <div className="flex basis-1/2 justify-center items-center">
          <img
            src={MePhoto}
            className="border-[1px] border-neutral-2 dark:border-neutral-1 rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] w-[250px] h-[250px] mt-[40px] mb-[40px]
           md:w-[350px] md:h-[350px]
           lg:w-[400px] lg:h-[400px] lg:mt-[100px]
           xl:w-[430px] xl:h-[430px] "
          />
        </div>
      </div>
    </div>
  );
};

export default MeSection;
