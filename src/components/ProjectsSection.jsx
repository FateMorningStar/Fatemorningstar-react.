
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="repo-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
