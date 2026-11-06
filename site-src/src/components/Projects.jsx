import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ProjectCard = ({ p, index }) => (
  <article
    data-testid={`project-card-${p.slug}`}
    className="h-full border border-border rounded-md bg-surface/40 hover:bg-surface hover:border-muted/40 p-6 flex flex-col gap-4"
  >
    <div className="flex items-center justify-between gap-3">
      <span
        className={`font-mono text-[10px] uppercase tracking-widest rounded-sm px-2 py-0.5 border ${
          p.flagship
            ? "border-accent text-accent bg-accent-glow"
            : "border-border text-muted"
        }`}
      >
        {p.tag}
      </span>
      <span className="font-mono text-xs text-muted tnum">
        P.{String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <h3 className="font-mono text-lg sm:text-xl font-medium tracking-tight">
      {p.title}
    </h3>
    <p className="text-sm text-muted leading-relaxed">{p.description}</p>
    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border-subtle pt-4">
      {p.metrics.map(([k, v]) => (
        <div key={k}>
          <dd className="font-mono text-base font-semibold tnum">{v}</dd>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {k}
          </dt>
        </div>
      ))}
    </dl>
    <p className="font-mono text-[11px] text-muted">{p.tech.join(" · ")}</p>
    <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
      {p.app && (
        <a
          href={p.app}
          data-testid={`project-app-link-${p.slug}`}
          className="press inline-flex items-center gap-2 bg-accent text-white font-mono text-sm font-medium rounded-sm px-4 py-2.5 hover:opacity-90"
        >
          Open app <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
      {p.url && (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`project-github-link-${p.slug}`}
          className="press inline-flex items-center gap-1.5 border border-border font-mono text-sm rounded-sm px-4 py-2.5 hover:bg-surface"
        >
          Code <ArrowUpRight size={14} aria-hidden="true" className="text-muted" />
        </a>
      )}
    </div>
  </article>
);

export const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    data-testid="projects-section"
    className="py-16 sm:py-24"
  >
    <SectionHeading index="02" id="projects-heading" title="Projects" sub={`SELECTED BUILDS // ${PROJECTS.length} ENTRIES`} />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
      {PROJECTS.map((p, i) => (
        <Reveal
          key={p.slug}
          delay={i * 0.06}
          className="md:col-span-6"
        >
          <ProjectCard p={p} index={i} />
        </Reveal>
      ))}
    </div>
  </section>
);
