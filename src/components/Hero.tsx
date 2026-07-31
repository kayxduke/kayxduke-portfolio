import { profile } from "../data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden hero-atmosphere"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden />

      <div className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end pb-16 pt-28 md:pb-24">
        <p className="font-display reveal text-6xl leading-none tracking-tight text-cream sm:text-7xl md:text-8xl lg:text-9xl">
          {profile.preferredName}
        </p>

        <h1 className="reveal reveal-delay-1 mt-6 max-w-2xl text-xl font-medium text-mist md:text-2xl">
          {profile.tagline}
        </h1>

        <p className="reveal reveal-delay-2 mt-4 max-w-xl text-sm leading-relaxed text-mist/70 md:text-base">
          React · TypeScript · Tailwind — based in {profile.location}, studying
          at {profile.university}.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-soft"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-mist/25 px-5 py-3 text-sm font-medium text-mist transition hover:border-gold/50 hover:text-gold-soft"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
