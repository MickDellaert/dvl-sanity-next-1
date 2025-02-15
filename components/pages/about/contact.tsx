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
    <div className="relative mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Contact" />
      <div className="col-span-4 col-start-1 text-3xl">
        <div className="flex flex-col gap-y-4">
          <h3 className="">Email: {contactDavidData.contact?.email}</h3>
          <h3 className="">Phone: {contactDavidData.contact?.mobileNumber}</h3>
          <h3 className="">
            Address: {contactDavidData.address?.[0]?.street}{" "}
            {contactDavidData.address?.[0]?.number}
          </h3>
          <h3 className="">
            {contactDavidData.address?.[0]?.postalCode}{" "}
            {contactDavidData.address?.[0]?.city}
          </h3>
        </div>
      </div>
      <div className="col-span-7 col-start-6">
        <BioImage data={projectImage} dimensions={dimensions} />
      </div>
    </div>
  );
}
