import { getHomePageData, getProjectsData } from "@/sanity/lib/queryLoaders";

export default async function Home() {
  const testData = await getHomePageData();
  const projects = await getProjectsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {testData.map((info) => (
        <div key={info._id}>
          <h1>{info.homepageTitle}</h1>
          <p>{info.homepageDescription}</p>
          <p>{info.homepageTest}</p>
        </div>
      ))}

      <div className="flex flex-row w-screen justify-between px-10">
        {projects.map((project) => (
          <div key={project._id} className="flex flex-col items-center">
            <h1>{project.projectTitle}</h1>
            <p>{project.projectDescription}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
