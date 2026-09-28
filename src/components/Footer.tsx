import type { Locale } from "../data/locales";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <span>José Daniel Maitán Jiménez — {locale.developerTitle}</span>
      <span>{locale.footer.builtWith}</span>
      <span>© 2026</span>
    </footer>
  );
}
