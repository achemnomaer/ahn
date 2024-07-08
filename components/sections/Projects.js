import projectsData from "@/lib/data/projectsData";
import ProjectCard from "../ProjectCard";
import SectionTitle from "../_child/SectionTitle";

export default function Projects() {
  return (
    <div className="px-4 mx-auto max-w-6xl sm:px-6 xl:max-w-6xl xl:px-0">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 mt-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
