import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-white/5 bg-forest py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.4fr] md:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            About
          </p>
          <h2 className="font-display mt-4 text-4xl text-cream md:text-5xl">
            {profile.name}
          </h2>
          <p className="mt-3 text-sm text-leaf">{profile.title}</p>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-mist/85 md:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className="border-l-2 border-gold/50 pl-4 text-mist/70">
            {profile.focus}
          </p>
        </div>
      </div>
    </section>
  );
}
