import { OverviewGallery } from "@/components/pages/gallery/overview-gallery";
import ProjectsGallery from "@/components/shared/projects-gallery-shared";
import { getProjectsData } from "@/sanity/lib/queryLoaders";
// import Masonry from "@mui/lab/Masonry";

export default async function page() {
  const projects = await getProjectsData();
  return (
    <main className="mx-auto mt-40 max-w-screen-2xl px-8">
      {/* <Masonry
        columns={{ xs: 1, md: 3, lg: 4 }}
        spacing={{ xs: 0, md: 3, lg: 4 }}
        defaultHeight={1200}
        defaultColumns={2}
        defaultSpacing={10}
      >
        <ProjectsGallery projects={projects} />
      </Masonry> */}

      <OverviewGallery projects={projects} />
    </main>
  );
}
