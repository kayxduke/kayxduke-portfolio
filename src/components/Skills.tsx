import { profile } from "../data/profile";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Skills
        </p>
        <h2 className="font-display mt-4 max-w-xl text-4xl text-cream md:text-5xl">
          Tools I use to ship interfaces
        </h2>

        <ul className="mt-12 flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="border border-moss bg-forest/60 px-4 py-2 text-sm text-mist transition hover:border-gold/40 hover:text-gold-soft"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Interests
          </p>
          <p className="mt-4 max-w-2xl text-mist/75">
            {profile.interests.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
