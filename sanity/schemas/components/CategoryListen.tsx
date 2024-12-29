import { SanityDocument } from "sanity";
import { useListeningQuery } from "sanity-plugin-utils";
import { useFormValue } from "sanity";
import Link from "next/link";
import { Text, Card, Flex, Button } from "@sanity/ui";
import Image from "next/image";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";

type ProjectImageDimensions = {
  width: number;
  height: number;
};

export type Category = {
  _id: string;
  name: string;
  projects: {
    _ref: string;
    _id: string;
    projectImage: string;
    projectImageDimensions: ProjectImageDimensions;
  }[];
};

export default function CategoryListen() {
  const { urlFor } = useImageUrlBuilder();
  const currentDoc = useFormValue(["_id"]) as string | undefined;

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useListeningQuery(
    `*[_type == $type]{
              _id, 
              name,
              "projects" : projects[]->{
                _id,
                "projectImage" : projectImage.asset->url, 
                "projectImageDimensions": projectImage.asset->metadata.dimensions,
                projectTitle,
                }
                }`,
    {
      params: { type: "category" },
      initialValue: [],
    },
  ) as { data: Category[]; loading: boolean; error: Error | null };

  if (categoryLoading) {
    return <p>Loading...</p>;
  }

  if (categoryError) {
    return <p>Error</p>;
  }

  const matchingCategory = categoryData.find((category) =>
    category.projects.some((project) => project._id === currentDoc),
  );

  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  return matchingCategory ? (
    <Link
      href={
        process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/structure/artwork;category;${matchingCategory._id}`
          : `http://localhost:3000/admin/structure/artwork;category;${matchingCategory._id}`
      }
    >
      <Card padding={1} flex={1} border radius={2}>
        <Button mode="bleed" padding={1} width="fill">
          <Flex direction="row" gap={3} align="center">
            <Image
              className=" transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              src={urlFor(matchingCategory.projects[0].projectImage)
                .width(
                  matchingCategory.projects[0].projectImageDimensions.width,
                )
                .height(
                  matchingCategory.projects[0].projectImageDimensions.height,
                )
                .fit("crop")
                .url()}
              alt="alt"
              width={33}
              height={33}
            />

            <Text
              size={1}
            >{`Part of the ${matchingCategory.name} series`}</Text>
          </Flex>
        </Button>
      </Card>
    </Link>
  ) : (
    <Link
      href={
        process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/structure/artwork;category`
          : `http://localhost:3000/admin/structure/artwork;category`
      }
    >
      <Card padding={1} flex={1} border radius={2}>
        <Button mode="bleed" padding={[3, 3, 4]} width="fill">
          <Flex direction="row" gap={3} align="center">
            <Text size={1}>Not part of any series. Click to manage.</Text>
          </Flex>
        </Button>
      </Card>
    </Link>
  );
}
