import { additionalExperience } from "@/app/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Additional Experience</h2>
      <div className="mt-6 grid gap-4">
        {additionalExperience.map((item) => (
          <article key={`${item.company}-${item.dates}`} className="rounded-xl border border-white/10 bg-slate-950/70 p-5">
            <h3 className="text-lg font-semibold text-sky-300">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-300">
              {item.company} | {item.location}
            </p>
            <p className="mt-1 text-sm text-slate-400">{item.dates}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
