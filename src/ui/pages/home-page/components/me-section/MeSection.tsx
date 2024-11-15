import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { Iconography, Typography } from "@ui";
import MePhoto from "../../../../../assets/me.jpg";
import { useTranslation } from "react-i18next";
import { HOME } from "@translations";
// import CV from "../../../../../assets/files/my-cv.pdf";

export const MeSection: FC = () => {
  const { t } = useTranslation();

  const handleCvDownload = () => {
    // Direct path to the CV in the public folder
    const pdfUrl = `${import.meta.env.BASE_URL}my-cv.pdf`;

    const link = document.createElement("a");
    link.href = pdfUrl; // Ensure it points to a valid PDF file
    link.download = "GIORGOS-PAPASTERGIOPOULOS-CV.pdf"; // Filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          <div
            onClick={handleCvDownload}
            className="flex w-max p-md items-center gap-sm border border-neutral-1 rounded-lg cursor-pointer"
          >
            <Typography
              element={TYPOGRAPHY_ELEMENT.P}
              variant={TYPOGRAPHY_VARIANT.P1}
              text="Download CV"
            />

            <div className="w-[18px] h-[18px]">
              <Iconography
                icon={ICONS.DOWNLOAD_ICON}
                classes="w-full h-full fill-white"
              />
            </div>
          </div>
        </div>

        <div className="flex basis-1/2 justify-center items-center">
          <img
            src={MePhoto}
            className="border-[1px] border-neutral-2 dark:border-neutral-1 rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] w-[250px] h-[250px] mt-[40px] mb-[40px]
           md:w-[350px] md:h-[350px]
           lg:w-[400px] lg:h-[400px] lg:mt-[100px]
           xl:w-[430px] xl:h-[430px] 
           object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MeSection;
