// GitHub Pages serves the repo root, so copy the fresh build there.
// Only the generated files are replaced: photos, resume.pdf, CNAME and apps/ stay.
import { cpSync, rmSync } from "node:fs";
import path from "node:path";

const src = path.resolve(import.meta.dirname, "..");
const root = path.resolve(src, "..");
rmSync(path.join(root, "static"), { recursive: true, force: true });
rmSync(path.join(root, "asset-manifest.json"), { force: true });
cpSync(path.join(src, "dist/static"), path.join(root, "static"), { recursive: true });
cpSync(path.join(src, "dist/index.html"), path.join(root, "index.html"));
