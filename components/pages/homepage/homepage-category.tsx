"use client";

import { type HomePageCategory } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import { HomePageQueryResult } from "@/sanity.types";

// type Props = {
//   homepageCategories: HomePageCategory[];
// };

type HomepageCategories =
  NonNullable<HomePageQueryResult>["homepageCategories"];

export default function HomePageCategory({
  homepageCategories,
}: {
  homepageCategories: HomepageCategories;
}) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  // const fontSize = useTransform(scrollYProgress, [0, 0.1], ["52px", "36px"]);

  if (!homepageCategories) {
    notFound();
  }

  return (
    <section>
      {/* <div>HomePageCategory</div> */}
      {/* <div className="sticky top-14 z-20 -mt-6 flex flex-row items-center text-2xl font-medium mix-blend-difference invert"> */}
      <div className="sticky top-8 z-20 -mt-[104px] flex flex-row items-center mix-blend-difference invert">
        <div className="flex flex-col text-4xl ">
          <motion.h2 style={{ opacity: opacity }}>Scroll down for</motion.h2>
          <h2 className="leading-8">Painting Series</h2>
        </div>
        {/* <h2 className="pb pl-2 text-3xl">↓</h2> */}
      </div>

      <div className="mt-44 grid grid-cols-12 content-center justify-center gap-x-2 gap-y-20 md:gap-x-4 md:gap-y-52">
        {homepageCategories.map((category) => {
          // TODO: check _id: is niet altijd uniek komende van een array

          return (
            // <div key={index} className="odd:col-span-6 odd:col-start-1 even:col-start-9 even:col-span-4 mt-28">
            <div
              key={category._id}
              className="col-span-12 md:col-span-5 md:col-start-2 md:last:col-span-6 
              md:last:col-start-4 md:[&:nth-child(4n+2)]:col-span-3 md:[&:nth-child(4n+2)]:col-start-9 md:[&:nth-child(4n+3)]:col-span-5 md:[&:nth-child(4n+3)]:col-start-1
              md:[&:nth-child(4n+4)]:col-span-5 md:[&:nth-child(4n+4)]:col-start-8"
            >
              <Link
                // className="w-[calc(50% - 2.5rem)] mb-12 md:mb-0 md:odd:mt-0 md:even:mt-24"
                className=""
                href={`series/${category.slug}`}
              >
                <div className="group cursor-crosshair">
                  <div className="relative overflow-hidden">
                    <h2
                      className="absolute left-1/2 top-1/2 z-50 mb-4 mt-4 w-fit -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-normal
                     text-gray-100 opacity-0 mix-blend-difference transition-all duration-500 group-hover:opacity-100"
                    >
                      {category.name}
                    </h2>
                    <Image
                      className="w-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                      src={
                        category.projects?.projectImage
                          ? urlFor(category.projects.projectImage)
                              .width(
                                category.projects.projectImageDimensions
                                  ?.width || 400,
                              )
                              .height(
                                category.projects.projectImageDimensions
                                  ?.height || 400,
                              )
                              .fit("crop")
                              .url()
                          : "https://placehold.co/400x400/png"
                      }
                      alt="alt"
                      width={400}
                      height={400}
                    />
                  </div>
                  {/* <h2
                    className="relative mb-4 mt-4 w-fit text-2xl font-medium transition-all duration-500 after:absolute
                  after:left-0 after:top-12 after:h-0.5 after:bg-black after:content-[''] group-hover:after:w-full md:mb-6 md:mt-6 md:text-3xl 
                  md:after:top-16"
                  > */}
                  {/* <h2 className="relative mb-4 mt-4 w-fit text-3xl font-medium text-gray-400 transition-all duration-500  group-hover:opacity-0 group-hover:invert">
                    {category.name}
                  </h2> */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
