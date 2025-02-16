import { sanityFetch } from "@/sanity/lib/live";
import { contactDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { PortableText } from "next-sanity";
import BioImage from "./bioImage";

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
    <div className="sticky bottom-0 mt-24 grid min-h-screen grid-cols-12 gap-x-20 bg-white pb-12">
      <StickyTitle stickyTitle="Contact" />
      <div className="col-span-4 col-start-1 content-end text-4xl">
        <div className="flex flex-col gap-y-24">
          <div className="relative flex flex-col gap-y-4 before:absolute before:-top-8 before:left-0 before:h-[4px] before:w-16 before:bg-black before:content-['']">
            <h3 className="">{contactDavidData.contact?.email}</h3>
            <h3 className="">{contactDavidData.contact?.mobileNumber}</h3>
            <h3 className="">
              {contactDavidData.address?.[0]?.street}{" "}
              {contactDavidData.address?.[0]?.number}
            </h3>
            <h3 className="">
              {contactDavidData.address?.[0]?.postalCode}{" "}
              {contactDavidData.address?.[0]?.city}
            </h3>
          </div>
          <div className="flex gap-x-12 text-xl tracking-tight">
            <h4>© 2025 David van Loon — website by MD</h4>
          </div>
        </div>
      </div>
      <div className="col-span-7 col-start-6 content-end">
        <BioImage data={projectImage} dimensions={dimensions} />
      </div>
    </div>
  );
}
