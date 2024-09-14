import { FC } from "react";
import LinkedInLogo from "../../../../assets/linkedIn-Logo.png";
import GitHubLogo from "../../../../assets/image.png";

export const LinksSection: FC = () => {
  return (
    <div className="flex gap-sm">
      <a href="https://www.linkedin.com/in/giorgos-papastergiopoulos-b167a4254/">
        <img
          src={LinkedInLogo}
          alt="LinkedIn Logo"
          className="rounded-md w-[50px] h-[50px] md:w-[54px] md:h-[54px] lg:w-[64px] lg:h-[64px]"
        />
      </a>
      <a href="https://github.com/JorgePap">
        <img
          src={GitHubLogo}
          alt="GitHub Logo"
          className="rounded-md w-[50px] h-[50px] md:w-[54px] md:h-[54px] lg:w-[64px] lg:h-[64px]"
        />
      </a>
    </div>
  );
};

export default LinksSection;
