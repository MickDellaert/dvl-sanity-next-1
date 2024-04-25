import { type HomePageCategory } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Props = {
  homepageCategories: HomePageCategory[];
};

export default function HomePageCategory({ homepageCategories }: Props) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  return (
    <>
      {/* <div>HomePageCategory</div> */}

      <div className="grid grid-cols-12 items-center justify-center gap-x-2 md:gap-x-12 gap-y-20 md:gap-y-28">
        {homepageCategories.map((category, index) => {
          // TODO: check _id: is niet altijd uniek komende van een array

          return (
            // <div key={index} className="odd:col-span-6 odd:col-start-1 even:col-start-9 even:col-span-4 mt-28">
            <div
              key={index}
              className="col-span-12 md:col-span-6 md:last:col-span-6 
              md:last:col-start-3 md:[&:nth-child(4n+2)]:col-span-4 md:[&:nth-child(4n+2)]:col-start-9 md:[&:nth-child(4n+3)]:col-span-5 md:[&:nth-child(4n+4)]:col-start-7"
            >
              <Link
                // className="w-[calc(50% - 2.5rem)] mb-12 md:mb-0 md:odd:mt-0 md:even:mt-24"
                className=""
                href={`series/${category.slug}`}
              >
                <div className="group cursor-crosshair">
                  <div className="overflow-hidden">
                    <Image
                      className="w-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                      src={urlFor(category.projects.projectImage)
                        .width(category.projects.width)
                        .height(category.projects.width)
                        .fit("crop")
                        .url()}
                      alt="alt"
                      width={400}
                      height={400}
                    />
                  </div>
                  <h2
                    className="relative mt-4 mb-4 md:mb-6 md:mt-6 w-fit text-2xl md:text-3xl font-medium
                  transition-all duration-500 after:absolute after:left-0 after:top-12 md:after:top-16 after:h-0.5 after:bg-black after:content-[''] 
                  group-hover:after:w-full"
                  >
                    {category.name}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
