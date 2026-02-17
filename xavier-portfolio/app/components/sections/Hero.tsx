import { profile } from "@/app/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-transparent p-8 sm:p-10">
      <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Portfolio</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-slate-100">
        {profile.role} | {profile.discipline}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-slate-950"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
