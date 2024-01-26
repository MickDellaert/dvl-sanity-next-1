import Image from "next/image";
import React from "react";

type Props = {
  imageTestData: string
}

export default function ImageTest({imageTestData}: Props) {



  console.log(imageTestData);

  return (
    <>
      <div>ImageTest</div>
      <Image src={imageTestData} alt="alt" width={1000} height={1000} />
    </>
  );
}
