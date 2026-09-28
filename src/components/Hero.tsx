import { ArrowLink } from "./ArrowLink";
import type { Locale } from "../data/locales";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker">
          {locale.hero.kicker}
        </p>
        <h1 id="hero-title">
          {locale.hero.titleFirst}
          <br />
          <em>{locale.hero.titleSecond}</em>
        </h1>
        <p className="hero-lede">
          {locale.hero.description}
        </p>
        <div className="hero-actions">
          <ArrowLink href="#projects">{locale.hero.projects}</ArrowLink>
          <ArrowLink href="#contact" secondary>
            {locale.hero.contact}
          </ArrowLink>
        </div>
        <p className="tech-line">
          C# <span>·</span> .NET <span>·</span> ASP.NET Core <span>·</span> SQL{" "}
          <span>·</span> React <span>·</span> TypeScript <span>·</span> Docker
        </p>
      </div>
      <div className="hero-aside">
        <img
          className="profile-photo"
          src={`${import.meta.env.BASE_URL}img/profile.png`}
          alt={locale.hero.imageAlt}
        />
        <p>
          {locale.hero.asideFirst}
          <br />
          {locale.hero.asideSecond}
        </p>
      </div>
    </section>
  );
}
