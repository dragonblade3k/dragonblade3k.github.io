import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { OffDuty } from "@/components/OffDuty";
import { Footer } from "@/components/Footer";

const CAR = [
  "        ____",
  "  _____//__\\\\______",
  " |  _          _  |",
  " '-(_)--------(_)-'",
].join("\n");

const bootConsole = () => {
  const mono = "font-family:monospace;";
  console.log(`%c${CAR}`, `${mono}color:#FF2E00;`);
  console.log(
    "%cBOX BOX.%c You found the pit wall.",
    `${mono}font-weight:bold;`,
    mono,
  );
  console.log(
    "%cshantanusirjoshi@gmail.com · github.com/dragonblade3k · linkedin.com/in/shantanusirjoshi",
    mono,
  );
  console.log("%cType help() for the telemetry menu.", `${mono}color:#FF2E00;`);
  window.help = () => {
    console.log(
      "%cTELEMETRY MENU\n" +
        "  contact   shantanusirjoshi@gmail.com\n" +
        "  github    github.com/dragonblade3k\n" +
        "  linkedin  linkedin.com/in/shantanusirjoshi\n" +
        "  resume    ./resume.pdf\n" +
        "  status    MS CS @ USC, May 2027",
      "font-family:monospace;",
    );
    return "green flag. you may proceed.";
  };
};

export default function App() {
  useEffect(() => {
    bootConsole();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground font-sans">
      <a
        href="#main"
        data-testid="skip-link"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-surface focus:border focus:border-border focus:rounded-sm focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <OffDuty />
      </main>
      <Footer />
    </div>
  );
}
