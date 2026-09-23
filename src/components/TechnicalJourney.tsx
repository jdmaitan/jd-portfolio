import type { Locale } from "../data/locales";

export function TechnicalJourney({ locale }: { locale: Locale }) {
  return (
    <section
      className="journey-band section-pad"
      aria-labelledby="journey-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.journey.number}</p>
        <h2 id="journey-title">
          {locale.journey.titleFirst}
          <br />
          {locale.journey.titleSecond}
        </h2>
      </div>
      <ol className="journey-list">
        {locale.journey.steps.map((step, index) => (
          <li key={step}>
            <span>0{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
