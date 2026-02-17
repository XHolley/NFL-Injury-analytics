import { AboutSection } from "@/app/components/sections/About";
import { EducationSection } from "@/app/components/sections/Education";
import { ExperienceSection } from "@/app/components/sections/Experience";
import { Hero } from "@/app/components/sections/Hero";
import { ProjectsSection } from "@/app/components/sections/Projects";
import { SkillsSection } from "@/app/components/sections/Skills";
import { contact } from "@/app/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm tracking-[0.2em] text-slate-400">XAVIER PORTFOLIO</p>
          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-sky-300">
              About
            </a>
            <a href="#projects" className="transition hover:text-sky-300">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-sky-300">
              Skills
            </a>
            <a href="#education" className="transition hover:text-sky-300">
              Education
            </a>
            <a href="#experience" className="transition hover:text-sky-300">
              Experience
            </a>
          </nav>
        </header>

        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />

        <footer id="contact" className="pb-6 pt-2 text-sm text-slate-400">
          <p>Contact: {contact.email}</p>
          <div className="mt-2 flex gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
