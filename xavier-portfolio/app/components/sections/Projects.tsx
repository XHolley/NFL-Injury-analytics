import { projects } from "@/app/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-white/10 bg-slate-950/70 p-5"
          >
            <h3 className="text-lg font-semibold text-sky-300">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

            {project.highlights && project.highlights.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-relaxed text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-200"
                >
                  {item}
                </li>
              ))}
            </ul>

            {project.github ? (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-md border border-sky-300/50 px-3 py-2 text-xs font-medium text-sky-200 transition hover:bg-sky-500 hover:text-slate-950"
                >
                  View GitHub
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
