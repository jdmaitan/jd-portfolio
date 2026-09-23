import { experience } from "../data/experience";
import type { Locale } from "../data/locales";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-labelledby="experience-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.experience.number}</p>
        <h2 id="experience-title">
          Experience
          <br />
          in context.
        </h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => {
          const copy = locale.experience.items[`${item.company}-${item.role}`];

          return (
          <article
            className="experience-item"
            key={`${item.company}-${item.role}`}
          >
            <div className="experience-date">{item.period}</div>
            <div>
              <p className="eyebrow">{item.company}</p>
              <h3>{copy.role}</h3>
              <p className="experience-location">{locale.locations[item.location] ?? item.location}</p>
              <p>{copy.focus}</p>
              <p className="muted-label">{locale.experience.technology}</p>
              <div className="tag-list">
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p className="muted-label">{locale.experience.contribution}</p>
              <p>{copy.contribution}</p>
              {copy.details.length > 0 && (
                <ul className="plain-list">
                  {copy.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
