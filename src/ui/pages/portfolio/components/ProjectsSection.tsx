import { FC } from "react";
import ProjectsItem from "./project-item/ProjectsItem";
import KardiasPhoto from "../../../../assets/kardias-project.jpg";
import WeatherSitePhoto from "../../../../assets/weather-site-photo.png";
import GameHubProjectPhoto from "../../../../assets/game-hub-project.png";
import StratakisLabPhoto from "../../../../assets/stratakis-lab-photo.png";
import { useTranslation } from "react-i18next";
import { PORTFOLIO } from "@translations";

export const ProjectsSection: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col md:flex-row flex-shrink-0 overflow-x-scroll
                    gap-xl pb-[20px]"
    >
      <ProjectsItem
        title={t("kardias", { ns: PORTFOLIO })}
        text={t("kardiasText", { ns: PORTFOLIO })}
        href="https://kardias-website.onrender.com/"
        techNames={[
          "Vite",
          "React",
          "Typescript",
          "Redux-Toolkit",
          "Tailwind",
          "Node.js",
          "Git",
        ]}
        classes="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${KardiasPhoto})` }}
      />
      <ProjectsItem
        title={t("stratakisLab", { ns: PORTFOLIO })}
        text={t("stratakisLabText", { ns: PORTFOLIO })}
        href="https://stratakislab-dev.iesl.forth.gr/"
        techNames={[
          "Vite",
          "React",
          "Typescript",
          "Redux-Toolkit",
          "Tailwind",
          "Git",
        ]}
        classes="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${StratakisLabPhoto})` }}
      />
      <ProjectsItem
        title={t("gameHub", { ns: PORTFOLIO })}
        text={t("gameHubText", { ns: PORTFOLIO })}
        href="https://game-hub-alpha-indol.vercel.app/"
        techNames={["Vite", "React", "Typescript", "Tailwind", "Git"]}
        classes="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${GameHubProjectPhoto})` }}
      />
      <ProjectsItem
        title={t("weather", { ns: PORTFOLIO })}
        text={t("weatherText", { ns: PORTFOLIO })}
        href="https://weather-site-peach.vercel.app/"
        techNames={[
          "Vite",
          "React",
          "Typescript",
          "Redux-Toolkit",
          "Tailwind",
          "Git",
        ]}
        classes="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${WeatherSitePhoto})` }}
      />
    </div>
  );
};

export default ProjectsSection;
