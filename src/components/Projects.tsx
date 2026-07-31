import { profile } from "../data/profile";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad border-t border-white/5 bg-forest py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Projects
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl text-cream md:text-5xl">
          Selected work and practice builds
        </h2>

        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {profile.projects.map((project, index) => (
            <li
              key={project.title}
              className="group grid gap-4 py-8 transition hover:bg-white/[0.02] md:grid-cols-[auto_1.2fr_1.6fr_1fr] md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl text-gold/70 md:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium text-cream transition group-hover:text-gold-soft md:text-2xl">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist/70 md:text-base">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs uppercase tracking-wider text-leaf"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
