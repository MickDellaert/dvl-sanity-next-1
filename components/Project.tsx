import Image from "next/image";
import { getProjectsData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";

const projects = await getProjectsData();
console.log

export function Project() {
  return (
    <div className="flex flex-row w-screen justify-between px-10">
      {projects.map((project) => (
        <div key={project._id} className="flex flex-col items-center">
                    <Image src={project.projectImage} alt="alt" width={200} height={200} />

          <h1>{project.projectTitle}</h1>
          {/* <p>{project.projectDescription}</p> */}
          <PortableText value={project.projectDescription}/>
          <p>{project.date}</p>
          <p>{project.material}</p>
          <p>{project.size}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;
