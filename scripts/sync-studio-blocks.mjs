import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CSS_URL = "https://studio.gcombinator.co/docs/studio-blocks.css";
const JS_URL = "https://studio.gcombinator.co/docs/studio-blocks.js";
const EXPECTED_MAJOR = 2;

const cssDest = path.resolve("styles/studio-blocks.css");
const jsDest = path.resolve("public/studio-blocks.js");

async function syncFile(url, dest, checkMajor = false) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[studio-blocks] Skipped ${url}: HTTP ${res.status}`);
      return;
    }
    const text = await res.text();
    if (checkMajor) {
      const match = text.match(/\bversion\s*[:=]\s*(\d+)/);
      const major = match ? Number(match[1]) : null;
      if (major !== null && major !== EXPECTED_MAJOR) {
        console.warn(
          `[studio-blocks] Kept existing ${dest}: script version ${major} != ${EXPECTED_MAJOR}`
        );
        return;
      }
    }
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, text, "utf8");
    console.log(`[studio-blocks] Updated ${path.relative(process.cwd(), dest)}`);
  } catch (err) {
    console.warn(`[studio-blocks] Kept existing ${dest} (fetch error):`, err);
  }
}

await syncFile(CSS_URL, cssDest, false);
await syncFile(JS_URL, jsDest, true);