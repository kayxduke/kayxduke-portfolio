import { profile } from "../data/profile";

type ContactKey = keyof typeof profile.contacts;

const contactLabels: { key: ContactKey; label: string }[] = [
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "portfolio", label: "Portfolio" },
  { key: "x", label: "X" },
  { key: "discord", label: "Discord" },
];

function hrefFor(key: ContactKey, value: string) {
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value}`;
  return value;
}

export function Contact() {
  const filled = contactLabels.filter(({ key }) => profile.contacts[key]);

  return (
    <section
      id="contact"
      className="section-pad border-t border-white/5 bg-forest py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Contact
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl text-cream md:text-5xl">
          Let’s build something useful
        </h2>
        <p className="mt-4 max-w-xl text-mist/75">
          Open to collaborations, internships, and frontend opportunities.
          Update your links in <code className="text-gold-soft">src/data/profile.ts</code>.
        </p>

        {filled.length > 0 ? (
          <ul className="mt-12 flex flex-wrap gap-4">
            {filled.map(({ key, label }) => {
              const value = profile.contacts[key];
              return (
                <li key={key}>
                  <a
                    href={hrefFor(key, value)}
                    target={key === "email" || key === "phone" ? undefined : "_blank"}
                    rel={
                      key === "email" || key === "phone"
                        ? undefined
                        : "noreferrer"
                    }
                    className="inline-flex border border-mist/20 px-4 py-2 text-sm text-mist transition hover:border-gold/50 hover:text-gold-soft"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-10 text-sm text-mist/60">
            Add your email, GitHub, and LinkedIn in the profile data file to
            enable contact links here.
          </p>
        )}
      </div>
    </section>
  );
}
