"use client";

import { useSwipeable } from "react-swipeable";

import { Project } from "@/sanity/types";
import Image from "next/image";
import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type projects = {
  projects: Project[];
};

export default function Lightbox({ projects }: projects) {
  const [imageToShow, setImageToShow] = useState(projects[0]);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImage = (image: Project) => {
    console.log(image);
    setImageToShow(image);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const nextImage = () => {
    let currentIndex = projects.findIndex((e) => e == imageToShow);

    let nextImage = projects[currentIndex + 1];
    setCurrentIndex(currentIndex + 1);

    setImageToShow(nextImage);
    console.log(currentIndex);
    console.log(projects.length);
  };

  const prevImage = () => {
    let currentIndex = projects.findIndex((e) => e == imageToShow);

    let nextImage = projects[currentIndex - 1];

    setCurrentIndex(currentIndex - 1);

    setImageToShow(nextImage);
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 items-center mx-auto max-w-screen-md">
        {/* <Slider {...settings}> */}
          {projects.map((project) => (
            <Image
              key={project._id}
              src={project.projectImage}
              width={500}
              height={500}
              alt=""
              onClick={() => getImage(project)}
            />
          ))}
        {/* </Slider> */}
      </div>
      {visible && (
        <>
          <div className="absolute top-0 w-screen h-screen flex items-center justify-center">
            {currentIndex > 0 && (
              <button className="bg-gray-500 rounded-xl p-2 m-8 z-30" onClick={prevImage}>
                prev
              </button>
            )}
            <div {...handlers} className="flex flex-col gap-1 z-10">
              <Image className="z-10" src={imageToShow.projectImage} width={500} height={500} alt="" />
              <p className="mt-2">{imageToShow.projectTitle}</p>
              <p>{imageToShow.size}</p>
            </div>
            {currentIndex < projects.length - 1 && (
              <button className="bg-gray-500 rounded-xl p-2 m-8 z-30" onClick={nextImage}>
                next
              </button>
            )}
          </div>
          <div className="bg-white opacity-50 absolute top-0 w-screen h-screen" onClick={hideModal}></div>
        </>
      )}
    </>
  );
}
