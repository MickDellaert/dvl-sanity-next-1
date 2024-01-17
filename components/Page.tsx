import { getPagesData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";

export default async function Page() {

  const pageData = await getPagesData();
  
  return (
    <div className="prose">
      {pageData.map((page) => (
        <div key={page._id}>
          <h2>{page.title}</h2>
           <PortableText value={page.content} />
        </div>
      ))}
    </div>
  );
}
