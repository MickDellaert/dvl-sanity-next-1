import { sanityFetch } from "@/sanity/lib/live";
import { exhibitionDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import StickyTitle from "../homepage/sticky-title";
import { formatDate } from "@/sanity/lib/utils";
import { ExhibitionWithoutFilterQueryResult } from "@/sanity.types";

export default async function AboutDavidExhibitionGrid() {
  const dateFormat: Intl.DateTimeFormatOptions = { year: "numeric" };

  const { data: exhibitionDavidData } = (await sanityFetch({
    query: exhibitionDavidQuery,
  })) as { data: ExhibitionWithoutFilterQueryResult };

  if (!exhibitionDavidData) {
    notFound();
  }

  return (
    <div className="relative mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Exhibitions & Publications" />
      <div className="col-span-7 col-start-6 grid grid-cols-subgrid gap-y-4">
        {exhibitionDavidData?.map((exhibition, i) => (
          <div
            key={i}
            className="relative col-span-7 grid grid-cols-subgrid gap-x-20
                       after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-black after:content-['']"
          >
            <div className="col-span-2 col-start-2 content-center text-3xl">
              <h3>{formatDate(exhibition.date?.start, dateFormat)}</h3>
              {/* <h3> — </h3> */}
              <h3>
                {formatDate(exhibition.date?.end, dateFormat) == "2025"
                  ? "Present"
                  : formatDate(exhibition.date?.end, dateFormat)}
              </h3>
            </div>
            <div className="col-span-4 content-center">
              <h3 className="text-2xl">{exhibition.name}</h3>
              <div className="flex w-fit flex-row justify-start text-xl">
                <h3 className="whitespace-pre-wrap">
                  {exhibition.gallery?.name},{" "}
                  {exhibition.gallery?.address?.city}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
