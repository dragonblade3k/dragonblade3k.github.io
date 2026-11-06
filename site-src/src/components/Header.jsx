import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV = [
  ["01", "About", "about"],
  ["02", "Projects", "projects"],
  ["03", "Experience", "experience"],
  ["04", "Free Practice", "offduty"],
  ["05", "Contact", "contact"],
];
const IDS = NAV.map(([, , id]) => id);

const laTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

export const Header = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark",
  );
  const [now, setNow] = useState(laTime());
  const active = useActiveSection(IDS);
  const current = NAV.find(([, , id]) => id === active);

  useEffect(() => {
    const id = setInterval(() => setNow(laTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        <a
          href="#top"
          data-testid="nav-logo"
          className="press font-mono text-sm font-semibold tracking-tight"
        >
          SSS_TEL<span className="text-accent">//</span>01
        </a>
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-6">
          {NAV.map(([, label, id]) => {
            const isActive = id === active;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                data-testid={`nav-link-${id}`}
                className={`press relative font-mono text-xs uppercase tracking-widest hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <span
            data-testid="header-sector-reading"
            aria-live="polite"
            className="hidden lg:inline font-mono text-xs text-muted tnum min-w-[7.5rem] text-right"
          >
            {current ? (
              <>
                <span className="text-accent">SEC {current[0]}</span> // {current[1].toUpperCase()}
              </>
            ) : (
              <>
                <span className="text-accent">SEC 00</span> // GRID
              </>
            )}
          </span>
          <span
            data-testid="header-la-clock"
            className="hidden md:inline font-mono text-xs text-muted tnum"
          >
            LA {now}
          </span>
          <button
            type="button"
            onClick={toggle}
            data-testid="theme-toggle-button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="press border border-border rounded-sm p-2 hover:bg-surface"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
};
