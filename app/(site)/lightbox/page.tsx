import Lightbox from "@/components/shared/lightbox";
import LightboxWithChildren from "@/components/shared/lightboxWithChildren";
import { getProjectsData } from "@/sanity/lib/queryLoaders";
import Image from "next/image";
import React from "react";

export default async function Page() {
  const projects = await getProjectsData();

  return (
    <>
      {/* <div className="grid grid-cols-3 items-center gap-8 mx-auto max-w-screen-lg">
        {projects.map((project, index) => (
          <LightboxWithChildren key={project._id} projectImage={project.projectImage} project={project} index={index}>
            <div>
              <Image className="" width={600} height={600} alt="" src={project.projectImage} />
            </div>
          </LightboxWithChildren>
        ))}
      </div> */}
      <Lightbox projects={projects}/>
    </>
  );
}