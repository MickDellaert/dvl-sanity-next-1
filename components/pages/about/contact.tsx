import { sanityFetch } from "@/sanity/lib/live";
import { contactDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { PortableText } from "next-sanity";
import AboutImage from "./about-image";

export default async function Contact() {
  const { data: contactIllustration } = await sanityFetch({
    query: `
*[_type == "project" && projectTitle == "The Inventor"]
   {_id,
   projectImage,
   "dimensions":projectImage.asset->metadata.dimensions 

  }`,
  });

  const { data: contactDavidData } = await sanityFetch({
    query: contactDavidQuery,
  });

  if (!contactDavidData) {
    notFound();
  }

  if (!contactIllustration) {
    notFound();
  }

  const { projectImage, dimensions } = contactIllustration[0];

  console.log(contactIllustration);

  return (
    <>
      <h2 className="px-x sticky top-12 z-30 mt-4 self-start text-3xl leading-10 mix-blend-difference invert md:left-8 md:top-16 md:px-8 md:text-4xl">
        Contact
      </h2>
      <div className="px-x sticky bottom-0 left-0 flex min-h-[100dvh] w-full flex-col justify-end bg-gray-200 pb-12 md:px-8">
        {/* <div className="z-30 mb-6 h-24 bg-green-200">
          <h2 className="sticky top-16 w-fit self-start whitespace-nowrap pt-1 text-4xl leading-10 mix-blend-difference invert">
            Contact
          </h2>
        </div> */}
        <div className="grid grid-cols-12 content-end gap-x-0 gap-y-8 text-2xl md:gap-x-20 md:text-3xl lg:text-4xl">
          <div className="col-span-12 col-start-1 md:col-span-6">
            <div className="relative flex h-full flex-col justify-between pt-8 before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black before:content-['']">
              <div className="relative flex flex-col gap-y-4">
                <h3 className="">{contactDavidData.contact?.email}</h3>
                <h3 className="">{contactDavidData.contact?.mobileNumber}</h3>
                <h3 className="leading-tight">
                  {contactDavidData.address?.[0]?.street}{" "}
                  {contactDavidData.address?.[0]?.number}, <br />
                  {contactDavidData.address?.[0]?.postalCode}{" "}
                  {contactDavidData.address?.[0]?.city}
                </h3>
              </div>
              <div className="mb-4 mt-8 flex gap-x-12 text-base tracking-tight md:mb-0 md:text-xl">
                <h4>© 2025 David van Loon — website by MD</h4>
              </div>
            </div>
          </div>
          <div className="col-span-12 col-start-1 content-end items-end md:col-span-8 md:col-start-1 lg:col-span-6 lg:col-start-7">
            <AboutImage data={projectImage} dimensions={dimensions} />
          </div>
        </div>
      </div>
    </>
  );
}
