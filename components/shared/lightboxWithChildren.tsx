"use client";

import { Project } from "@/sanity/types";
import Image from "next/image";
import React from "react";
import { useState } from "react";

type ChildrenProps = {
  children: JSX.Element;
  project: Project;
  index: number
  projectImage: string
};

export default function LightboxWithChildren({ children, project, index, projectImage }: ChildrenProps) {

  const [image, setImage] = useState("")

  const clickHandler = () => {
    // console.log(index);
    setImage(projectImage)
  };

  console.log(projectImage);

  return (
    <div className="wrapper" onClick={clickHandler}>
      {children}
      <p>{index}</p>
      <Image src={projectImage} width={400} height={400} alt="" />
    </div>
  );
}
