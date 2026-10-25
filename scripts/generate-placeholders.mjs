import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "This script needs the 'sharp' package to render the frame images.\n\n" +
      "  npm install --no-save sharp\n" +
      "  npm run placeholder:assets\n"
  );
  process.exit(1);
}

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const frameSrc = join(root, "scripts", "frame-src");

async function renderBuffer(source, width, { flop = false } = {}) {
  let pipeline = sharp(Buffer.from(source), { density: 72 }).resize({ width });
  if (flop) pipeline = pipeline.flop();
  return pipeline.webp({ quality: 82, effort: 4 }).toBuffer();
}

async function save(buffer, file) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buffer);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(`${relative(root, file).replaceAll("\\", "/")}  ${kb} KB`);
}

console.log("Generating frame art...\n");

const frameDir = join(root, "public", "frame");
const top = await readFile(join(frameSrc, "top.svg"));
const bottom = await readFile(join(frameSrc, "bottom.svg"));
const left = await readFile(join(frameSrc, "left.svg"));

await save(await renderBuffer(top, 1600), join(frameDir, "top.webp"));
await save(await renderBuffer(left, 240), join(frameDir, "left.webp"));
await save(await renderBuffer(left, 240, { flop: true }), join(frameDir, "right.webp"));
await save(await renderBuffer(bottom, 1600), join(frameDir, "bottom.webp"));

console.log("\nDone. Frame art generated in public/frame/.");
