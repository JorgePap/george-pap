import { FC } from "react";
import LinkedInLogo from "../../../../assets/linkedIn-Logo.png";
import GitHubLogo from "../../../../assets/image.png";

export const LinksSection: FC = () => {
  return (
    <div className="flex gap-sm">
      <img
        src={LinkedInLogo}
        alt="LinkedIn Logo"
        className="rounded-md lg:w-[64px] lg:h-[64px]"
      />
      <img
        src={GitHubLogo}
        alt="GitHub Logo"
        className="rounded-md lg:w-[64px] lg:h-[64px]"
      />
    </div>
  );
};

export default LinksSection;
