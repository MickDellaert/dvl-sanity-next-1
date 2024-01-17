import { getPageData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";

type paramProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: paramProps) {

  // console.log(params.slug);
  const slug = params.slug;

  const pageData = await getPageData(slug);

  console.log(pageData);

  return (
    <>
      <div>{`${slug} page`}</div>
      {/* {pageData.map((page) => (
        <div key={page._id}>
          <h2>{page.title}</h2>
          <PortableText value={page.content} />
        </div>
      ))} */}
     <h2> {pageData.title}</h2>
     {/* <h3>{pageData.slug}</h3> */}
     <PortableText value={pageData.content} />
    </>
  );
}
