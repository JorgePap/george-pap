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
        className="flex flex-shrink-0 overflow-x-scroll
                    gap-xl"
      >
        <ProjectsItem title={"Kardias"} text={"Kardias is a project"} />
        <ProjectsItem title={"Kardias"} text={"Kardias is a project"} />
        <ProjectsItem title={"Kardias"} text={"Kardias is a project"} />
        <ProjectsItem title={"Kardias"} text={"Kardias is a project"} />
      </div>
    </div>
  );
};

export default ProjectsSection;
