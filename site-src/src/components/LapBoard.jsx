import { HERO_BOARD } from "@/data/content";

export const LapBoard = () => (
  <aside
    aria-label="Key readings"
    data-testid="hero-lap-board"
    className="border border-border rounded-md bg-surface/40 overflow-hidden"
  >
    <div className="flex items-center justify-between px-4 py-2 border-b border-border">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
        LAP BOARD // KEY READINGS
      </span>
      <span className="font-mono text-[10px] text-muted tnum">
        {String(HERO_BOARD.length).padStart(2, "0")} CH
      </span>
    </div>
    <dl>
      {HERO_BOARD.map(([value, label, source], i) => (
        <div
          key={label}
          data-testid={`lap-board-row-${i + 1}`}
          className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 px-4 py-3 border-b border-border-subtle last:border-b-0"
        >
          <span className="font-mono text-[10px] text-accent tnum">
            CH.{String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <dd className="font-mono text-xl sm:text-2xl font-semibold tnum leading-none">
              {value}
            </dd>
            <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-muted truncate">
              {label}
            </dt>
          </div>
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest hidden sm:inline">
            {source}
          </span>
        </div>
      ))}
    </dl>
  </aside>
);
