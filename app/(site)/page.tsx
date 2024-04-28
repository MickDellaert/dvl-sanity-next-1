import HomePage from "@/components/pages/homepage/homepage";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="mx-auto mt-32 w-[90%] md:max-w-screen-2xl">
      {/* <Suspense fallback={<h2 className="text-red-800">loading home</h2>}> */}
        <HomePage />
      {/* </Suspense> */}
    </main>
  );
}
