export const SectionHeading = ({ index, id, title, sub }) => (
  <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
    <h2
      id={id}
      className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
    >
      <span className="text-accent tnum">{index}</span>
      <span className="text-muted"> // </span>
      {title}
    </h2>
    <span className="hidden sm:block font-mono text-[11px] uppercase tracking-widest text-muted">
      {sub}
    </span>
  </div>
);
