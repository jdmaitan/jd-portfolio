import { projects } from "../data/projects";
import type { Locale } from "../data/locales";

export function SelectedWork({ locale }: { locale: Locale }) {
  return (
    <section
      id="projects"
      className="section-pad ruled-section"
      aria-labelledby="projects-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.selectedWork.number}</p>
        <h2 id="projects-title">
          {locale.selectedWork.titleFirst}
          <br />
          {locale.selectedWork.titleSecond}
        </h2>
      </div>
      <div className="project-list">
        {projects.map((project, index) => {
          const copy = locale.selectedWork.projects[project.title];

          return (
          <article
            className={`project-card ${index === 0 ? "featured" : ""}`}
            key={project.title}
          >
            <div className="card-top">
              <p className="eyebrow">{copy.eyebrow}</p>
              <span className="index">0{index + 1}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{copy.description}</p>
            <div className="project-details">
              <div>
                <strong>{locale.selectedWork.labels.problem}</strong>
                <p>{copy.problem}</p>
              </div>
              <div>
                <strong>{locale.selectedWork.labels.approach}</strong>
                <p>{copy.approach}</p>
              </div>
              <div>
                <strong>{locale.selectedWork.labels.decisions}</strong>
                <p>{copy.decisions}</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="tag-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {(project.githubUrl ||
                project.liveUrl ||
                project.documentationUrl ||
                project.presentationUrl) && (
                <div className="card-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locale.selectedWork.links.github} ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locale.selectedWork.links.liveDemo} ↗
                    </a>
                  )}
                  {project.documentationUrl && (
                    <a
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${copy.documentationLabel} ${locale.selectedWork.ariaFor} ${project.title}`}
                    >
                      {copy.documentationLabel} ↗
                    </a>
                  )}
                  {project.presentationUrl && (
                    <a
                      href={project.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${copy.presentationLabel} ${locale.selectedWork.ariaFor} ${project.title}`}
                    >
                      {copy.presentationLabel} ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
