import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const FACTS = [
  ["DATES", "OCT 2023 – MAR 2025"],
  ["TEAM", "3 ENGINEERS"],
  ["DOMAIN", "SECURITIES SETTLEMENT"],
];

const STACK = ["Java", "Spring Boot", "Angular", "Oracle SQL", "JUnit"];

export const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    data-testid="experience-section"
    className="py-16 sm:py-24"
  >
    <SectionHeading index="03" id="experience-heading" title="Experience" sub="WORK HISTORY // 1 ENTRY" />
    <Reveal className="mt-10">
      <article
        data-testid="experience-tcs-card"
        className="border border-border rounded-md bg-surface/40 p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-mono text-lg sm:text-xl font-medium tracking-tight">
            Systems Engineer
          </h3>
          <span className="font-mono text-xs text-muted uppercase tracking-widest">
            Tata Consultancy Services — Mumbai
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-8 space-y-4 text-base text-muted leading-relaxed">
          <p>
            NSDL is India&rsquo;s national securities depository, which means it
            holds the electronic record of who owns what across the
            country&rsquo;s markets. Margin pledge is the part where you put up
            shares you already own as collateral against a trade. If that record
            is wrong or arrives late, somebody is trading against collateral
            that isn&rsquo;t there, so most of the work is about the state being
            correct and current rather than about throughput.
          </p>
          <p>
            There were three of us building it, which meant there was nobody to
            hand a layer off to. I owned features from the database schema up
            through the Spring Boot service layer to the screens people actually
            used.
          </p>
          <p>
            The interesting part was the bulk file path. A pledge file gets
            format checked line by line, and if a single row is malformed the
            whole file is rejected with an error report. If it passes, the file
            is split into smaller batches that run in parallel, and the
            consolidation stage holds the result back until every batch reports
            in before it can say what was accepted and what was rejected. I
            worked on the format validation and the consolidation.
          </p>
          <p>
            Validation itself used to be if else chains repeated for every
            pledge type, and there are several: initiation, closure, repledge,
            removal. I worked on replacing that with a rule engine where each
            validation type is its own class and the rules for each transaction
            type live in JSON config served from a config server. Changing a
            rule stopped being a code change.
          </p>
          <p>
            Migrating the legacy Struts application to Angular and modular
            Spring Boot services cut transaction latency by about 20% against
            the original, measured in a test environment. Alongside that I wrote
            the JUnit suites across the frameworks then in flight, and onboarded
            four engineers, which meant writing the onboarding documentation the
            team ramped up on. Explaining the system to four people taught me
            more about it than building my part of it had.
          </p>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-border-subtle md:pl-8">
            <dl className="space-y-5">
              {FACTS.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {k}
                  </dt>
                  <dd className="font-mono text-sm font-semibold tnum mt-1">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  STACK
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {STACK.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-muted border border-border-subtle rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </article>
    </Reveal>
  </section>
);
