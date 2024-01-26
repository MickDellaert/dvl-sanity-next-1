import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Project } from "@/sanity/types";

type Props = {
  project: Project;
};

export function ProjectListItem({ project }: Props) {
  
  const { _id, projectTitle, projectDescription, projectImage, date, material, size } = project;

  return (
    <div  className="flex flex-row justify-between gap-8">
      <div className="prose flex flex-col items-center">
        <Image src={projectImage} alt={projectTitle} width={400} height={400} />
        <h2>{projectTitle}</h2>
        <PortableText value={projectDescription} />
        <p>{date}</p>
        <p>{material}</p>
        <p>{size}</p>
      </div>
    </div>
  );
}

export default ProjectListItem;
