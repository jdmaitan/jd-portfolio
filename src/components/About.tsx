import type { Locale } from "../data/locales";

export function About({ locale }: { locale: Locale }) {
  return (
    <section
      id="about"
      className="section-pad ruled-section"
      aria-labelledby="about-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.about.number}</p>
        <h2 id="about-title">
          {locale.about.titleFirst}
          <br />
          {locale.about.titleSecond}
        </h2>
      </div>
      <div className="about-copy">
        <p className="lead">
          {locale.about.lead}
        </p>
        <p>
          {locale.about.paragraphs[0]}
        </p>
        <p>
          {locale.about.paragraphs[1]}
        </p>
      </div>
    </section>
  );
}
