import { useState } from "react";
import type { Language, Locale } from "../data/locales";

const navItems = [
  "about",
  "projects",
  "experience",
  "education",
  "learning-materials",
  // "notes",
  "contact",
];

interface HeaderProps {
  language: Language;
  locale: Locale;
  onLanguageChange: (language: Language) => void;
}

export function Header({ language, locale, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={locale.homeLabel}>
        <span>José Daniel Maitán</span>
        <small>{locale.developerTitle}</small>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? locale.menu.close : locale.menu.open}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <nav
        id="site-nav"
        className={menuOpen ? "is-open" : ""}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
            {locale.navigation[item]}
          </a>
        ))}
      </nav>
      <div className="language-switcher" role="group" aria-label={locale.languageSwitcherLabel}>
        <button type="button" className={language === "en" ? "is-active" : ""} aria-pressed={language === "en"} onClick={() => onLanguageChange("en")}>EN</button>
        <span aria-hidden="true">|</span>
        <button type="button" className={language === "es" ? "is-active" : ""} aria-pressed={language === "es"} onClick={() => onLanguageChange("es")}>ES</button>
      </div>
    </header>
  );
}
