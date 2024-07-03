import ProjectCard from "./projectCard";

export default function ProjectsDisplay({ content }) {
  return (
    <div>
      {content.map((project) => (
        <ProjectCard
          key={project.id}
          description={project.description}
          id={project.id}
          imageHeight={project.imageHeight}
          imageURL={project.imageURL}
          imageWidth={project.imageWidth}
          launched={project.launched}
          projectLink={project.link}
          technologies={project.technologies}
          title={project.title}
        />
      ))}
    </div>
  );
}
