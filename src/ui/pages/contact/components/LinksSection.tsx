import { FC } from "react";
import { Iconography } from "@ui";
import { ICONS } from "@domain";

export const LinksSection: FC = () => {
  const handleCvDownload = () => {
    // Direct path to the CV in the public folder
    const pdfUrl = `${import.meta.env.BASE_URL}my-cv.pdf`;

    const link = document.createElement("a");
    link.href = pdfUrl; // Ensure it points to a valid PDF file
    link.download = "MyCV.pdf"; // Filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center gap-sm">
      <a
        className="bg-[#4a66ba] p-md rounded-lg"
        href="https://www.linkedin.com/in/giorgos-papastergiopoulos-b167a4254/"
      >
        <Iconography
          classes="w-[24px] h-[24px] md:w-[30px] md:h-[30px]  
                    fill-white"
          icon={ICONS.LINKEDIN_ICON}
        />
      </a>
      <a
        className="bg-[#4a66ba] p-md rounded-lg"
        href="https://github.com/JorgePap"
      >
        <Iconography
          classes="w-[24px] h-[24px] md:w-[30px] md:h-[30px] 
                   fill-white"
          icon={ICONS.GITHUB_ICON}
        />
      </a>
      <div
        onClick={handleCvDownload}
        className="bg-[#4a66ba] p-md rounded-lg cursor-pointer"
      >
        <Iconography
          classes="w-[24px] h-[24px] md:w-[30px] md:h-[30px] 
                   fill-white"
          icon={ICONS.CV_ICON}
        />
      </div>
    </div>
  );
};

export default LinksSection;
