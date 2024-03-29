import { getPageData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import { notFound } from 'next/navigation'

type paramProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: paramProps) {
  const slug = params.slug;
  const pageData = await getPageData(slug);

  const { slug: pageSlug, title, content } = pageData ?? {};

  if (!pageData) {
    notFound()
  }

  console.log(pageData)

  return (
    <>
    <section className="px-16 min-h-screen">
      <div>{`${slug} page`}</div>
      {/* {pageData.map((page) => (
        <div key={page._id}>
          <h2>{page.title}</h2>
          <PortableText value={page.content} />
        </div>
      ))} */}
      <h2> {title}</h2>

      {/* //TODO: slug hier veranderd naar kleine S, ook in type */}
      <h3>{pageSlug}</h3>

      <PortableText value={content} />
      </section>
    </>
  );
}
