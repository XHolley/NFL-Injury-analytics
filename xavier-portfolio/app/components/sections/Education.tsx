import { education } from "@/app/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Education</h2>

      <div className="mt-4 space-y-1 text-slate-300">
        <p className="text-lg font-medium text-sky-300">{education.school}</p>
        <p>
          {education.degree}, Minor in {education.minor}
        </p>
        <p>Graduated: {education.graduation}</p>
        <p>GPA: {education.gpa}</p>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold text-white">Leadership & Honors</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300">
          {education.honors.map((honor) => (
            <li key={honor}>{honor}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {education.coursework.map((course) => (
          <article key={course.code} className="rounded-xl border border-white/10 bg-slate-950/70 p-5">
            <h3 className="text-base font-semibold text-sky-300">
              {course.code} - {course.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-200">Focus: {course.focus}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{course.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
