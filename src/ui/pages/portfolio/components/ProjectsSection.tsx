import { FC } from "react";
import ProjectsItem from "./project-item/ProjectsItem";
import { Typography } from "@ui";
import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import KardiasPhoto from "../../../../assets/kardias-project.jpg";

export const ProjectsSection: FC = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Typography
        element={TYPOGRAPHY_ELEMENT.H6}
        variant={TYPOGRAPHY_VARIANT.H6}
        text="My Projects"
        classes="text-dark-1 dark:text-neutral-1"
      />
      <div
        className="flex flex-col md:flex-row flex-shrink-0 overflow-x-scroll
                    gap-xl pb-[20px]"
      >
        <ProjectsItem
          title={"Kardias"}
          text={
            "Kardias is a streamlined system for efficient house rental management"
          }
          techNames={[
            "Vite",
            "React",
            "Typescript",
            "Redux-Toolkit",
            "Tailwind",
            "Node.js",
            "Git",
          ]}
          classes="bg-center"
          style={{ backgroundImage: `url(${KardiasPhoto})` }}
        />
        <ProjectsItem
          title={"Stratakis Lab"}
          text={"Stratakis Lab is a project"}
          techNames={[
            "Vite",
            "React",
            "Typescript",
            "Redux-Toolkit",
            "Tailwind",
            "Git",
          ]}
        />
        <ProjectsItem
          title={"Whether"}
          text={"Weather is a personal project that provides weather forecasts"}
          techNames={[
            "Vite",
            "React",
            "Typescript",
            "Redux-Toolkit",
            "Tailwind",
            "Git",
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
