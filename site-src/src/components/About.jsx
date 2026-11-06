import { EDUCATION, STACK } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";

export const About = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    data-testid="about-section"
    className="py-16 sm:py-24"
  >
    <SectionHeading index="01" id="about-heading" title="About" sub="OPERATOR PROFILE" />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
      <Reveal className="md:col-span-7 space-y-5 text-base leading-relaxed text-muted">
        <p>
          I&rsquo;m a backend-first engineer finishing an MS in Computer Science
          at USC (May 2027, GPA <span className="tnum">3.62</span>). Before
          moving to Los Angeles, I spent a year and a half as a Systems Engineer
          at TCS in Mumbai, on a three-person team building settlement services
          for NSDL, India&rsquo;s national securities depository. Three people
          meant I owned features the whole way down, from the database schema
          through the Spring Boot service layer to the front end. My BE in
          Computer Engineering is from the University of Mumbai (2023,{" "}
          <span className="tnum">8.82/10</span>).
        </p>
        <p>
          The reason I&rsquo;m in this field at all is JARVIS, honestly. I was a
          kid watching Iron Man and the part that got me was that a person had
          built it. It&rsquo;s just a voice, there&rsquo;s no body to it, and it
          could still do all of that. I was hooked within a heartbeat. Learned
          C++ in the eighth grade, built a console version of BookMyShow in Java
          in high school mostly to see whether I could, and the reason
          hasn&rsquo;t really changed since.
        </p>
        <p>
          Two of the projects below came straight out of following Formula 1.
          One finds race screenings around Mumbai, the other turns race data into
          short narrated videos.
        </p>
        <dl className="pt-3 space-y-3">
          {EDUCATION.map((e) => (
            <div
              key={e.id}
              data-testid={`education-row-${e.id.toLowerCase().replace(".", "-")}`}
              className="flex flex-wrap items-baseline gap-x-3 border-l-2 border-border pl-3"
            >
              <dt className="font-mono text-[11px] text-accent tnum">{e.id}</dt>
              <dd className="font-mono text-sm text-foreground">{e.degree}</dd>
              <dd className="text-sm">{e.school}</dd>
              <dd className="font-mono text-xs tnum">{e.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-5 space-y-6">
        <PhotoSlot
          src="portrait.jpg"
          label="PORTRAIT"
          dims="1200 × 1500 · 4:5"
          alt="Shantanu Sirjoshi at Griffith Observatory, with the Los Angeles skyline behind him at night"
          ratio="aspect-[4/5]"
          testId="about-portrait-slot"
        />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-2.5">
            PRIMARY STACK
          </p>
          <ul className="flex flex-wrap gap-2" data-testid="about-stack-list">
            {STACK.map((s) => (
              <li
                key={s}
                className="font-mono text-xs border border-border rounded-sm px-2 py-1 bg-surface/40"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
