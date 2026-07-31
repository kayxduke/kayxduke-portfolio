import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-white/5 bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-mist/55 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl text-cream/80">
          {profile.preferredName}
        </p>
        <p>
          © {year} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
