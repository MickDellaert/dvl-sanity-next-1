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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 justify-center px-8 md:px-16">
        {homepageCategories.map((category, index) => {
          // TODO: check _id: is niet altijd uniek komende van een array

          return (
            <>
              <Link
                className="w-[calc(50% - 2.5rem)] mb-12 md:mb-0 md:odd:mt-0 md:even:mt-24"
                href={`series/${category.slug}`}
                key={index}
              >
                <div className="">
                  <h2 className="font-semibold tracking-widest text-3xl mt-8 mb-8">{category.name}</h2>
                  <Image
                    className="w-full"
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
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
