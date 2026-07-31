import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <nav className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-tight text-cream transition hover:text-gold"
        >
          {profile.preferredName}
        </a>
        <ul className="hidden items-center gap-7 text-sm text-mist/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-gold-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-sm border border-gold/40 px-3 py-1.5 text-xs font-medium tracking-wide text-gold transition hover:bg-gold hover:text-ink md:text-sm"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
