import { certifications } from "../data/certifications";
import { education } from "../data/education";
import type { Locale } from "../data/locales";

export function Education({ locale }: { locale: Locale }) {
  return (
    <section
      id="education"
      className="section-pad ruled-section education-section"
      aria-labelledby="education-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.education.number}</p>
        <h2 id="education-title">{locale.education.title}</h2>
      </div>
      <div className="education-content">
        <div className="education-list">
          {education.map((item) => {
            const copy = locale.education.items[item.degree];

            return (
            <article className="education-item" key={item.degree}>
              <p className="experience-date">{item.period}</p>
              <div>
                <h3>{copy.degree}</h3>
                <p>
                  {item.institution} · {locale.locations[item.location] ?? item.location}
                </p>
                <p className="education-detail">{copy.detail}</p>
              </div>
            </article>
            );
          })}
        </div>
        <div className="certification-list">
          <p className="muted-label">{locale.education.certifications}</p>
          {certifications.map((certification) => (
            <div className="certification-item" key={certification.title}>
              <div>
                <strong>{certification.title}</strong>
                <span>
                  {certification.issuer} · {certification.date}
                </span>
              </div>
              {certification.url && (
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {locale.education.credential} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
