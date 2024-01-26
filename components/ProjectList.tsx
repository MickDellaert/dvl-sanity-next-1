import { getProjectsData } from "@/sanity/lib/queryLoaders";
import ProjectListItem from "./ProjectListItem";
import React from "react";

const projects = await getProjectsData();

export function ProjectList() {
  return (
    <div className="flex flex-row justify-between gap-8">

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectListItem project={project} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProjectList;
