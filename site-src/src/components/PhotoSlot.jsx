const Corner = ({ className }) => (
  <span
    aria-hidden="true"
    className={`absolute w-3 h-3 border-accent ${className}`}
  />
);

const Corners = () => (
  <>
    <Corner className="top-2 left-2 border-t border-l" />
    <Corner className="top-2 right-2 border-t border-r" />
    <Corner className="bottom-2 left-2 border-b border-l" />
    <Corner className="bottom-2 right-2 border-b border-r" />
  </>
);

// Renders the real photo when `src` is given, and the marked placeholder
// otherwise. The corner ticks stay in both states so filling a slot does not
// change the section's visual language.
export const PhotoSlot = ({ src, label, dims, alt, ratio, testId, className = "" }) => {
  if (src) {
    return (
      <figure
        data-testid={testId}
        className={`relative border border-border bg-surface/40 overflow-hidden ${ratio} ${className}`}
      >
        <img
          src={`/${src}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Corners />
      </figure>
    );
  }

  return (
    <figure
      role="img"
      aria-label={`${alt} (photo placeholder)`}
      data-testid={testId}
      className={`relative border border-dashed border-border bg-surface/40 overflow-hidden ${ratio} ${className}`}
    >
      <Corners />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          IMG_SLOT // {label}
        </span>
        <span className="font-mono text-[11px] text-muted tnum">{dims}</span>
        <span className="font-mono text-[10px] text-muted/70 max-w-[240px]">
          drop in a file with alt=&ldquo;{alt}&rdquo; — no layout shift
        </span>
      </figcaption>
    </figure>
  );
};
