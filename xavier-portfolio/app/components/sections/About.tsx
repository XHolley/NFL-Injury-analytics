import { about } from "@/app/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <div className="mt-4 space-y-4 text-slate-300">
        {about.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
