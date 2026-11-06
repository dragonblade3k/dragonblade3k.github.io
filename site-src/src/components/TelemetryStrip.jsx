import { useEffect, useRef, useState } from "react";

const fmtTime = (tz) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

const fmtDur = (s) =>
  [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

export const TelemetryStrip = () => {
  const start = useRef(Date.now());
  const [, tick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    ["LOCAL / USC", fmtTime("America/Los_Angeles")],
    ["MUMBAI", fmtTime("Asia/Kolkata")],
    ["SESSION", fmtDur(Math.floor((Date.now() - start.current) / 1000))],
    ["UPLINK", "LIVE"],
  ];

  return (
    <dl
      data-testid="live-telemetry-widget"
      className="grid grid-cols-2 sm:grid-cols-4 border border-border rounded-sm bg-surface/50 overflow-hidden"
    >
      {cells.map(([k, v]) => (
        <div key={k} className="px-3 py-2.5 border-border">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-muted flex items-center gap-1.5">
            {k === "UPLINK" && (
              <span
                className="live-dot inline-block w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
            )}
            {k}
          </dt>
          <dd className="font-mono text-sm font-medium tnum mt-0.5">{v}</dd>
        </div>
      ))}
    </dl>
  );
};
