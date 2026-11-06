import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/data/content";
import { CopyEmail } from "@/components/CopyEmail";

const CONTACTS = [
  ["EMAIL", `mailto:${LINKS.email}`, LINKS.email, "footer-email-link"],
  ["GITHUB", LINKS.github, "github.com/dragonblade3k", "footer-github-link"],
  ["LINKEDIN", LINKS.linkedin, "linkedin.com/in/shantanusirjoshi", "footer-linkedin-link"],
  ["RESUME", LINKS.resume, "resume.pdf", "footer-resume-link"],
];

export const Footer = () => (
  <footer
    id="contact"
    data-testid="footer-section"
    className="border-t border-border"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
        <span className="text-accent tnum">05</span>
        <span className="text-muted"> // </span>Contact
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        {CONTACTS.map(([label, href, display, testId]) => (
          <div
            key={label}
            className="group flex items-baseline justify-between gap-4 border-b border-border-subtle pb-3 hover:border-border"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {label}
            </span>
            <span className="inline-flex items-center gap-3">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-testid={testId}
                className="press font-mono text-sm hover:text-accent inline-flex items-center gap-1.5"
              >
                {display}
                <ArrowUpRight size={13} aria-hidden="true" className="text-muted" />
              </a>
              {label === "EMAIL" && (
                <CopyEmail
                  testId="footer-copy-email-button"
                  className="border border-border rounded-sm px-1.5 py-0.5 hover:bg-surface"
                />
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-muted">
        <span data-testid="footer-copyright" className="tnum">
          © 2026 Shantanu Shirish Sirjoshi
        </span>
        <span data-testid="footer-console-hint">
          psst, open the console
        </span>
      </div>
    </div>
  </footer>
);
