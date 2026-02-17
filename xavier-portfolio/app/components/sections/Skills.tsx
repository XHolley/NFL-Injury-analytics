import { skills } from "@/app/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-white/20 bg-slate-900/80 px-4 py-2 text-sm text-slate-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
