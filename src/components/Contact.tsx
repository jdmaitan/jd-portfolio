import type { Locale } from "../data/locales";

export function Contact({ locale }: { locale: Locale }) {
  return (
    <section
      id="contact"
      className="contact-section section-pad"
      aria-labelledby="contact-title"
    >
      <p className="section-number">{locale.contact.eyebrow}</p>
      <h2 id="contact-title">{locale.contact.title}</h2>
      <p>{locale.contact.description}</p>
      <div className="contact-links">
        <a href="mailto:jdmaitan@gmail.com">{locale.contact.email} ↗</a>
        <a href="tel:+541130906572">{locale.contact.phone} ↗</a>
        <a
          href="https://linkedin.com/in/jdmaitan"
          target="_blank"
          rel="noopener noreferrer"
        >
          {locale.contact.linkedIn} ↗
        </a>
        <a
          href="https://github.com/jdmaitan"
          target="_blank"
          rel="noopener noreferrer"
        >
          {locale.contact.github} ↗
        </a>
        <a
          href={`${import.meta.env.BASE_URL}CV/Jose_Maitan_DotNet_Software_Developer_CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV — English"
        >
          {locale.contact.cvEnglish} ↗
        </a>
        <a
          href={`${import.meta.env.BASE_URL}CV/Jose_Maitan_Desarrollador_Software_DotNet_CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descargar CV — Español"
        >
          {locale.contact.cvSpanish} ↗
        </a>
      </div>
    </section>
  );
}
