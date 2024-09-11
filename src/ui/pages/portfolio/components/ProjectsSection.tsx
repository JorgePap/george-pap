import { FC } from "react";
import ProjectsItem from "./project-item/ProjectsItem";
import { Typography } from "@ui";
import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";

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
            "Tailwind",
            "Node.js",
            "Git",
          ]}
          classes="bg-[url(C:\Projects\george-pap\src\assets\kardias-project.jpg)] bg-center"
        />
        <ProjectsItem
          title={"Kardias"}
          text={"Kardias is a project"}
          techNames={[]}
        />
        <ProjectsItem
          title={"Kardias"}
          text={"Kardias is a project"}
          techNames={[]}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
