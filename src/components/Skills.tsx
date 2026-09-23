import { additionalKnowledge, skillGroups } from "../data/skills";
import type { Locale } from "../data/locales";

export function Skills({ locale }: { locale: Locale }) {
  return (
    <section
      className="section-pad skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.skills.number}</p>
        <h2 id="skills-title">
          {locale.skills.titleFirst}
          <br />
          {locale.skills.titleSecond}
        </h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{locale.skills.groupLabels[group.label] ?? group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="skill-group">
          <h3>{locale.skills.additionalKnowledge}</h3>
          <ul>
            {additionalKnowledge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
