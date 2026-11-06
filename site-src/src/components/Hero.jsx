import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/data/content";
import { TelemetryStrip } from "@/components/TelemetryStrip";
import { LapBoard } from "@/components/LapBoard";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";

export const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    data-testid="hero-section"
    className="pt-20 sm:pt-28 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
  >
    <div className="lg:col-span-7">
      <Reveal>
        <p
          data-testid="hero-status-badge"
          className="inline-flex items-center gap-2 border border-border rounded-sm px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-muted"
        >
          <span className="live-dot inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          STATUS // MS CS @ USC — MAY 2027
        </p>
        <h1
          id="hero-heading"
          className="mt-6 font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          Shantanu Shirish
          <br />
          Sirjoshi<span className="text-accent">_</span>
        </h1>
        <p
          data-testid="hero-positioning"
          className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
        >
          Backend-first software engineer — Java, Spring Boot, Python, TypeScript.
          Most recently built settlement services for India&rsquo;s national
          securities depository.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-8 max-w-2xl">
          <TelemetryStrip />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            data-testid="hero-projects-button"
            className="press inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium rounded-sm px-4 py-2.5 hover:opacity-90"
          >
            View projects <ArrowDown size={14} aria-hidden="true" />
          </a>
          <a
            href={LINKS.resume}
            data-testid="hero-resume-link"
            className="press inline-flex items-center gap-2 border border-border font-mono text-sm rounded-sm px-4 py-2.5 hover:bg-surface"
          >
            resume.pdf
          </a>
          <div className="flex items-center gap-1 ml-1">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — github.com/dragonblade3k"
              data-testid="hero-github-link"
              className="press p-2.5 text-muted hover:text-foreground"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — linkedin.com/in/shantanusirjoshi"
              data-testid="hero-linkedin-link"
              className="press p-2.5 text-muted hover:text-foreground"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              aria-label={`Email — ${LINKS.email}`}
              data-testid="hero-contact-button"
              className="press p-2.5 text-muted hover:text-foreground"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <CopyEmail iconOnly testId="hero-copy-email-button" className="p-2.5" />
          </div>
        </div>
      </Reveal>
    </div>
    <Reveal delay={0.16} className="lg:col-span-5 lg:pt-12">
      <LapBoard />
    </Reveal>
  </section>
);
