import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
// import { EngineeringNotes } from "./components/EngineeringNotes";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LearningMaterials } from "./components/LearningMaterials";
import { SelectedWork } from "./components/SelectedWork";
import { Skills } from "./components/Skills";
import { TechnicalJourney } from "./components/TechnicalJourney";
import { locales, type Language } from "./data/locales";

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "es" ? "es" : "en";
    } catch {
      return "en";
    }
  });
  const locale = locales[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Ignore unavailable localStorage while keeping language switching functional.
    }
  }, [language]);

  return (
    <div className="site-shell">
      <Header language={language} locale={locale} onLanguageChange={setLanguage} />
      <main id="top">
        <Hero locale={locale} />
        <About locale={locale} />
        <Skills locale={locale} />
        <SelectedWork locale={locale} />
        <Experience locale={locale} />
        <Education locale={locale} />
        <LearningMaterials locale={locale} />
        <TechnicalJourney locale={locale} />
        {/*<EngineeringNotes /> */}
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

export default App;
