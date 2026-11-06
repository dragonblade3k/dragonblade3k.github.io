import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { LINKS } from "@/data/content";

export const CopyEmail = ({ testId, className = "", iconOnly = false }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      window.location.href = `mailto:${LINKS.email}`;
    }
  };

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      data-testid={testId}
      aria-label={copied ? "Email address copied" : `Copy email address ${LINKS.email}`}
      className={`press inline-flex items-center gap-1.5 font-mono text-xs ${
        copied ? "text-accent" : "text-muted hover:text-foreground"
      } ${className}`}
    >
      <Icon size={iconOnly ? 18 : 13} aria-hidden="true" />
      {!iconOnly && (
        <span className="uppercase tracking-widest text-[10px]" aria-live="polite">
          {copied ? "COPIED" : "COPY"}
        </span>
      )}
      {iconOnly && (
        <span className="sr-only" aria-live="polite">
          {copied ? "Copied" : ""}
        </span>
      )}
    </button>
  );
};
