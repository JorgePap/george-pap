import { FC } from "react";
import { Iconography } from "@ui";
import { ICONS } from "@domain";

export const LinksSection: FC = () => {
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
        {/* <img
          src={LinkedInLogo}
          alt="LinkedIn Logo"
          className="rounded-md w-[50px] h-[50px] md:w-[54px] md:h-[54px] lg:w-[64px] lg:h-[64px]"
        /> */}
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
        {/* <img
          src={GitHubLogo}
          alt="GitHub Logo"
          className="rounded-md w-[50px] h-[50px] md:w-[54px] md:h-[54px] lg:w-[64px] lg:h-[64px]"
        /> */}
      </a>
    </div>
  );
};

export default LinksSection;
