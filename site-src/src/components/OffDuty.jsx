import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const READINGS = [
  ["VOLLEYBALL", "MYSELF · SETTER"],
  ["CRICKET", "ROHIT SHARMA"],
  ["F1", "LEWIS HAMILTON"],
  ["FOOTBALL", "MESSI"],
];

export const OffDuty = () => (
  <section
    id="offduty"
    aria-labelledby="offduty-heading"
    data-testid="offduty-section"
    className="pb-16 sm:pb-24"
  >
    <SectionHeading index="04" id="offduty-heading" title="Free Practice" sub="NOT SCORED" />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
      <Reveal className="md:col-span-6">
        <PhotoSlot
          src="offduty.jpg"
          label="CANDID // FREE PRACTICE"
          dims="1200 × 1600 · 3:4"
          alt="Shantanu lying on the bonnet of a Suburban under a night sky in the desert"
          ratio="aspect-[3/4]"
          testId="offduty-photo-slot"
        />
        <p className="mt-2 font-mono text-[11px] text-muted">
          FIG.02
        </p>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-6 space-y-5 text-base leading-relaxed text-muted">
        <p>
          I follow Lewis Hamilton, and race weekends here start at hours that
          make no sense at all, so half the time I&rsquo;m up for them and the
          other half I&rsquo;ll watch the full replay later that day, avoiding
          the result completely until I can sit down and do it properly.
        </p>
        <p>
          Volleyball I played as a setter, and in 11th and 12th I led my school
          team to the Maharashtra state championship, which is how I ended up
          playing at nationals. I don&rsquo;t play any more and I really miss it.
          I couldn&rsquo;t tell you much about the final itself. I just remember
          it feeling really good, and there&rsquo;s a photo from that day I still
          have.
        </p>
        <p>
          Which is fairly typical of me, honestly. I remember how something felt
          far more than what actually happened, and a smell will put me back in a
          specific year faster than a date ever will. Songs are the one
          exception. I know most of the lyrics, and I&rsquo;ll sing and dance to
          almost anything.
        </p>
        <p>
          I love driving and I&rsquo;ll take almost any excuse for a road trip.
          The photo up there is from one of them. Cricket and badminton are the
          two I still actually play.
        </p>
        <p>
          I&rsquo;ve built my own machine twice now, once in Mumbai and then
          again after I got to LA, and after all that GTA V is still what I end
          up playing on it. Very much waiting on VI.
        </p>
        <p>
          Mumbai to LA for the masters, and nobody really prepares you for how
          fast the first year goes as an international student. So much happened
          that I couldn&rsquo;t write it all down if I tried.
        </p>
        <dl className="pt-3 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border-subtle pt-5">
          {READINGS.map(([k, v]) => (
            <div key={k} data-testid={`offduty-reading-${k.toLowerCase().replace(/\s+/g, "-")}`}>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {k}
              </dt>
              <dd className="font-mono text-sm font-semibold mt-0.5">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);
