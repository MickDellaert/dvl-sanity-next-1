// "use client";

// import Image from "next/image";
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import Link from "next/link";
// import { Category } from "@/sanity/types";

// type Props = {
//   data: Category[];
// };

// export default function CategoryGallery({ data }: Props) {

//   // console.log(data)
//   // console.log(data[0].project[0])
//   console.log("test")

//   return (
//     <LightGallery>
//       {data.map((category) =>
//         category.project.map((project) => (

//           <Link key={project} className="gallery-item" href={project}>
//             <Image src={project} data-src={project} width={200} height={200} alt="alt" />
//           </Link>
//         ))
//       )}
      
//       <p>wtf</p>
//     </LightGallery>
//   );
// }
