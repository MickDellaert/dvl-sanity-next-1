import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import HomepageSeriesTitle from "./homepage-series-title";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageSeriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function HomePageSeries() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }
  const { data: homepageData } = await sanityFetch({
    query: homePageSeriesQuery,
  });

  if (!homepageData) {
    notFound();
  }

  const { homepageCategories } = homepageData;

  console.log(homepageCategories);

  return (
    <section>
      <HomepageSeriesTitle />
      <div className="mt-44 grid grid-cols-12 content-center justify-center gap-x-2 gap-y-20 md:gap-x-4 md:gap-y-48">
        {homepageCategories?.map((category) => {
          return (
            <div
              key={category._id}
              className="col-span-12 md:col-span-5 md:col-start-2 md:last:col-span-6 
              md:last:col-start-4 md:[&:nth-child(4n+2)]:col-span-3 md:[&:nth-child(4n+2)]:col-start-9 md:[&:nth-child(4n+3)]:col-span-5 md:[&:nth-child(4n+3)]:col-start-1
              md:[&:nth-child(4n+4)]:col-span-5 md:[&:nth-child(4n+4)]:col-start-8"
            >
              <Link className="" href={`series/${category.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-900">
                    <h2
                      className="absolute left-1/2 top-1/2 z-50 mb-4 mt-4 w-fit -translate-x-1/2 -translate-y-1/2 text-center text-5xl uppercase
                     text-white opacity-0 transition-all duration-500 group-hover:opacity-80"
                    >
                      {category.name}
                    </h2>
                    <div
                      style={{
                        backgroundColor:
                          category.projects?.projectImagePalette ??
                          "transparent",
                      }}
                    >
                      <Image
                        // className="w-full transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:blur-sm"
                        className="w-full transition-all duration-700  group-hover:opacity-60"
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
                        // style={{
                        //   backgroundColor:
                        //     category.projects?.projectImagePalette ??
                        //     "transparent",
                        // }}
                      />
                    </div>
                  </div>

                  <h2 className="relative mb-4 mt-6 w-fit text-center text-3xl uppercase text-black transition-all duration-500 group-hover:opacity-0 group-hover:invert">
                    {category.name}
                  </h2>
                  {/* <div
                    className="h-20 w-full"
                    style={{
                      backgroundColor:
                        category.projects?.projectImagePalette ?? "transparent",
                    }}
                  ></div> */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
