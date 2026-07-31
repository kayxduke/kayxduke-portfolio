import { profile } from "../data/profile";

export function Education() {
  return (
    <section id="education" className="section-pad bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Education
          </p>
          <h2 className="font-display mt-4 text-4xl text-cream md:text-5xl">
            {profile.education.school}
          </h2>
          <p className="mt-4 text-lg text-leaf">{profile.education.focus}</p>
          <p className="mt-4 max-w-md text-mist/75">{profile.education.note}</p>
        </div>

        <div className="border-l border-gold/30 pl-6 md:pl-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Career objective
          </p>
          <p className="font-display mt-4 text-2xl leading-snug text-cream md:text-3xl">
            {profile.objective}
          </p>
        </div>
      </div>
    </section>
  );
}
