export const LINKS = {
  email: "shantanusirjoshi@gmail.com",
  github: "https://github.com/dragonblade3k",
  linkedin: "https://www.linkedin.com/in/shantanusirjoshi",
  resume: "resume.pdf",
};

export const PROJECTS = [
  {
    slug: "f1-screenings",
    tag: "FLAGSHIP",
    title: "F1 Screenings",
    description:
      "Finds F1 screenings across Mumbai from messy web listings. A person checks every event before it goes live.",
    tech: ["Next.js", "Prisma", "Ollama"],
    metrics: [
      ["verified events", "11"],
      ["listings reviewed", "70"],
    ],
    app: "/apps/f1-screenings/",
    url: "https://github.com/dragonblade3k/f1-screenings",
    flagship: true,
  },
  {
    slug: "ipl-auction-scout",
    tag: "ML / SPORTS",
    title: "IPL Auction Scout",
    description:
      "Scores uncapped Indian cricketers for the IPL 2027 auction, tested on past auctions it never saw.",
    tech: ["Python", "Cricsheet", "BCCI data"],
    metrics: [
      ["players scored", "315"],
      ["AUC, unseen auctions", "0.65 to 0.68"],
    ],
    app: "/apps/ipl-auction-scout/",
  },
  {
    slug: "content-pipeline",
    tag: "PIPELINE",
    title: "Content Pipeline",
    description:
      "Turns an F1 topic into a narrated, captioned vertical video. Every stage is swappable.",
    tech: ["Python", "Ollama", "ffmpeg"],
    metrics: [
      ["stages", "5"],
      ["tests", "102"],
    ],
    app: "/apps/content-pipeline/",
    url: "https://github.com/dragonblade3k/content-pipeline",
  },
  {
    slug: "cancernet",
    tag: "ML / VISION",
    title: "CancerNet",
    description:
      "Classifies breast cancer tissue images and shows what drove each call with Grad CAM.",
    tech: ["TensorFlow", "Keras", "CUDA"],
    metrics: [
      ["accuracy", "86%"],
      ["ROC AUC", "0.91"],
    ],
    url: "https://github.com/dragonblade3k/Breast-Cancer-Classification",
  },
];

export const EDUCATION = [
  {
    id: "EDU.01",
    degree: "MS, Computer Science",
    school: "University of Southern California",
    detail: "May 2027 · GPA 3.62",
  },
  {
    id: "EDU.02",
    degree: "BE, Computer Engineering",
    school: "University of Mumbai",
    detail: "2023 · GPA 8.82/10",
  },
];

export const STACK = ["Java", "Spring Boot", "Python", "TypeScript", "Next.js"];

export const HERO_BOARD = [
  ["1.5 YRS", "NSDL settlement services", "TCS"],
  ["11 / 70", "verified events / candidates", "F1 SCREENINGS"],
  ["99,906", "held-out patches classified", "CANCERNET"],
  ["0.91", "ROC AUC", "CANCERNET"],
];
