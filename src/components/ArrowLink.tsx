import type { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}

export function ArrowLink({
  href,
  children,
  secondary = false,
}: ArrowLinkProps) {
  return (
    <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
