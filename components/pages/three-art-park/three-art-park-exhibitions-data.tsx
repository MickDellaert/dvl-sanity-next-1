import { ThreeArtParkQueryResult } from "@/sanity.types";
import { PortableText } from "@portabletext/react";

type ThreeArtParkExpo = NonNullable<
  NonNullable<ThreeArtParkQueryResult>["threeArtParkExpo"]
>[number];

//
export default function ThreeArtParkExhibitionsData({
  expo,
}: {
  expo: ThreeArtParkExpo;
}) {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return ""; // Handle empty or undefined dates
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("nl-BE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="mb-12 flex w-fit flex-col lg:mb-0">
      <h2
        className="relative mb-6 mt-8 flex flex-row text-4xl before:absolute
                       before:-top-8 before:left-0 before:h-1 before:w-12 before:bg-stone-950 before:content-[''] lg:text-5xl"
      >
        {expo.name}
      </h2>
      <div className="flex flex-row flex-wrap gap-4 text-2xl leading-4 lg:text-3xl lg:leading-6">
        <h3>{expo.date?.start ? formatDate(expo.date?.start) : ""}</h3>{" "}
        <h3>—</h3>
        <h3>{formatDate(expo.date?.end)}</h3>
      </div>
      <div className="mt-8 text-lg leading-normal lg:mt-10 lg:text-xl lg:leading-9">
        {expo.description && <PortableText value={expo.description} />}
      </div>
    </div>
  );
}
