import { sanityFetch } from "@/sanity/lib/live";
import { contactDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { PortableText } from "next-sanity";

export default async function Contact() {
  const { data: contactDavidData } = await sanityFetch({
    query: contactDavidQuery,
  });

  if (!contactDavidData) {
    notFound();
  }

  console.log(contactDavidData);
  console.log("contact");

  return (
    <div className="relative mb-80 mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Contact" />
      <div className="col-span-4 col-start-7 text-xl [&_li:last-child]:mb-0 [&_li>*:first-child]:text-2xl [&_li]:mb-4">
        <h3 className="text-2xl">Email: {contactDavidData.contact.email}</h3>
        <h3 className="text-2xl">
          Phone: {contactDavidData.contact.mobileNumber}
        </h3>
        <h3 className="text-2xl">
          Adress: {contactDavidData.address[0].street}{" "}
          {contactDavidData.address[0].number}
        </h3>
        <h3 className="text-2xl">
          {contactDavidData.address[0].postalCode}{" "}
          {contactDavidData.address[0].city}
        </h3>
      </div>
    </div>
  );
}
