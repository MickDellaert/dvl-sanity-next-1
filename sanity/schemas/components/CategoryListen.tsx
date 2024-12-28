import { SanityDocument } from "sanity";
import { useListeningQuery } from "sanity-plugin-utils";
import { useFormValue } from "sanity";
import Link from "next/link";
import { Stack, Text, Card, Flex, Button } from "@sanity/ui";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { env } from "process";

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

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function CategoryListen() {
  const currentDoc = useFormValue(["_id"]) as string | undefined;
  // const {
  //   data: categoryData,
  //   loading: categoryLoading,
  //   error: categoryError,
  // } = useListeningQuery(`*[_type == $type]`, {
  //   params: { type: "category" },
  //   initialValue: [],
  // }) as { data: Category[]; loading: boolean; error: Error | null };

  // const {
  //   data: projectData,
  //   loading: projectLoading,
  //   error: projectError,
  // } = useListeningQuery(`*[_type == $type]`, {
  //   params: { type: "project" },
  //   initialValue: [],
  // }) as { data: Category[]; loading: boolean; error: Error | null };

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
  // const isCurrentDocInProjects = data.some((category) =>
  //   category.projects.some((project) => project._ref === currentDoc),
  // );

  // const matchingCategory = categoryData.find((category) =>
  //   category.projects.some((project) => project._ref === currentDoc),
  // );

  // const matchingTestCategory = testData.find((category) =>
  //   category.projects.some((project) => project._ref === currentDoc),
  // );

  // const matchingTestProject = matchingTestCategory?.projects.find(
  //   (project) => project._ref === currentDoc,
  // );

  // const matchingProject = projectData.find(
  //   (project) => project._id === currentDoc,
  // );

  // const isIdInProjects = testData.some((category) =>
  //   category.projects.some((project) => project._id === currentDoc),
  // );

  const matchingCategory = categoryData.find((category) =>
    category.projects.some((project) => project._id === currentDoc),
  );

  // console.log(data[0].projects);
  // console.log(currentDoc);
  // console.log("includes" + isCurrentDocInProjects);
  // console.log("matching" + matchingCategory.name);
  console.log(currentDoc);
  // console.log(testData);
  // console.log(matchingTestCategory);
  // console.log(matchingTestProject);
  // console.log(isIdInProjects);
  console.log(matchingCategory);
  // console.log(matchingCategory);
  // console.log(matchingCategory?.projects);
  // console.log(projectData);
  // console.log(matchingProject?.projectImage.asset._ref);

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
              src={
                matchingCategory?.projects[0].projectImage
                  ? urlFor(matchingCategory?.projects[0].projectImage)
                      .width(
                        matchingCategory?.projects[0].projectImageDimensions
                          ?.width || 400,
                      )
                      .height(
                        matchingCategory?.projects[0].projectImageDimensions
                          ?.height || 400,
                      )
                      .fit("crop")
                      .url()
                  : "https://placehold.co/400x400/png"
              }
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
            {/* <Image
            className=" transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
            src={
              matchingCategory?.projects[0].projectImage
                ? urlFor(matchingCategory?.projects[0].projectImage)
                    .width(
                      matchingCategory?.projects[0].projectImageDimensions
                        ?.width || 400,
                    )
                    .height(
                      matchingCategory?.projects[0].projectImageDimensions
                        ?.height || 400,
                    )
                    .fit("crop")
                    .url()
                : "https://placehold.co/400x400/png"
            }
            alt="alt"
            width={33}
            height={33}
          /> */}

            <Text size={1}>Not part of any series. Click to manage.</Text>
          </Flex>
        </Button>
      </Card>
    </Link>
  );
}

// http://localhost:3000/admin/structure/artwork;category;fb7b915a-77b8-496f-8a66-4a58ecb168ab
// http://localhost:3000/admin/structure/artwork;category;e195895f-2386-4ab9-b9ee-43fb3fdc55f5
