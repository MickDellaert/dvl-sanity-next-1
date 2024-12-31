import { SanityDocument } from "sanity";
import { useListeningQuery } from "sanity-plugin-utils";
import { useFormValue } from "sanity";
import Link from "next/link";
import { Text, Card, Flex, Button, Stack } from "@sanity/ui";
import Image from "next/image";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";

type Indentity = {
  firstName: string;
  lastName: string;
};

export type Exhibition = {
  _id: string;
  title: string;
  name: string;
  artists: {
    _id: string;
    identity: Indentity;
  }[];
};

export default function ExhibitionListen() {
  const { urlFor } = useImageUrlBuilder();
  const currentDoc = useFormValue(["_id"]) as string | undefined;

  const {
    data: exhibitionData,
    loading: exhibitionLoading,
    error: exhibitionError,
  } = useListeningQuery(
    `*[_type == $type]{
              _id, 
              name,
              "artists" : artist[]->{
                _id,
                name,
                title,
                identity
                }
                }`,
    {
      params: { type: "exhibition" },
      initialValue: [],
    },
  ) as { data: Exhibition[]; loading: boolean; error: Error | null };

  if (exhibitionLoading) {
    return <p>Loading...</p>;
  }

  if (exhibitionError) {
    return <p>Error</p>;
  }

  // console.log(exhibitionData);
  // console.log(currentDoc);
  // console.log(exhibitionData[0].artists);

  const matchingExhibition = exhibitionData.filter((exhibition) =>
    exhibition.artists.some((artist) => artist._id === currentDoc),
  );

  console.log(matchingExhibition);

  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  return matchingExhibition.length > 0 ? (
    <Stack space={1}>
      {/* <Image
              className=" transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              src={urlFor(matchingExhibition.projects[0].projectImage)
              .width(
                matchingExhibition.projects[0].projectImageDimensions.width,
                )
                .height(
                  matchingExhibition.projects[0].projectImageDimensions.height,
                  )
                  .fit("crop")
                  .url()}
                  alt="alt"
                  width={33}
                  height={33}
                  /> */}
      {matchingExhibition.map((expo) => (
        <>
          <Link
            key={expo._id}
            href={
              process.env.NEXT_PUBLIC_VERCEL_URL
                ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/structure/exhibition;${expo._id}`
                : `http://localhost:3000/admin/structure/exhibition;${expo._id}`
            }
          >
            <Card padding={1} flex={1} border radius={2}>
              <Button mode="bleed" padding={2} width="fill">
                <Flex direction="row" gap={3} align="center">
                  <Text size={1}>{expo.name}</Text>
                </Flex>
              </Button>
            </Card>
          </Link>
        </>
      ))}
    </Stack>
  ) : (
    <Link
      href={
        process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/structure/exhibition`
          : `http://localhost:3000/admin/structure/exhibition`
      }
    >
      <Card padding={1} flex={1} border radius={2}>
        <Button mode="bleed" padding={[3, 3, 4]} width="fill">
          <Flex direction="row" gap={3} align="center">
            <Text size={1}>Not part of any exhibition. Click to manage.</Text>
          </Flex>
        </Button>
      </Card>
    </Link>
  );
}
