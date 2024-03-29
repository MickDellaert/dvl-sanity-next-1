import Image from "next/image";
import { getProjectsData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";


const projects = await getProjectsData();

// console.log(projects)

// const {_id, projectTitle ,projectDescription, projectImage} = projects

export function Projects() {
  return (
    <div className="flex flex-row justify-between gap-8">
      {projects.map((project) => (
        <div key={project._id} className="prose flex flex-col items-center">
          <Image src={project.projectImage} alt="alt" width={400} height={400} />

          <h2>{project.projectTitle}</h2>
          <PortableText value={project.projectDescription} />
          <p>{project.date}</p>
          <p>{project.material}</p>
          <p>{project.size}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Projects;
