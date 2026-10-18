import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "This script needs the 'sharp' package to render placeholder images.\n\n" +
      "  npm install --no-save sharp\n" +
      "  npm run placeholder:assets\n"
  );
  process.exit(1);
}

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const frameSrc = join(root, "scripts", "frame-src");

const GOLD = "#e6d27a";
const ACCENTS = ["#2e7d48", "#4da066", "#87d898"];

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

function leaf(x, y, r, s, fill) {
  return `<use href="#leaf" fill="${fill}" transform="translate(${x},${y}) rotate(${r}) scale(${s})"/>`;
}

function productArt(index) {
  const accent = ACCENTS[index % ACCENTS.length];
  const chrome = `
    <rect x="150" y="150" width="900" height="500" rx="26" fill="#0d3626" stroke="#195c3b" stroke-width="2"/>
    <rect x="150" y="150" width="900" height="56" rx="26" fill="#11422f"/>
    <rect x="150" y="178" width="900" height="28" fill="#11422f"/>
    <circle cx="196" cy="178" r="9" fill="${GOLD}"/>
    <circle cx="228" cy="178" r="9" fill="#4da066"/>
    <circle cx="260" cy="178" r="9" fill="#165633"/>`;

  let layout = "";

  if (index % 3 === 0) {
    const ys = [250, 306, 362, 418, 474, 530];
    const widths = [380, 520, 300, 440, 360, 240];
    const lines = ys
      .map(
        (y, i) =>
          `<rect x="210" y="${y + 2}" width="46" height="12" rx="6" fill="${accent}"/>` +
          `<rect x="274" y="${y}" width="${widths[i]}" height="16" rx="8" fill="#154d37"/>`
      )
      .join("");
    layout = `
      ${lines}
      <rect x="780" y="248" width="220" height="46" rx="23" fill="#195c3b"/>
      <circle cx="812" cy="271" r="10" fill="#87d898"/>
      <rect x="836" y="265" width="130" height="12" rx="6" fill="#11422f"/>
      <circle cx="880" cy="470" r="92" fill="none" stroke="#195c3b" stroke-width="18"/>
      <circle cx="880" cy="470" r="92" fill="none" stroke="${ACCENTS[1]}" stroke-width="18" stroke-linecap="round" stroke-dasharray="433 578" transform="rotate(-90 880 470)"/>
      <circle cx="880" cy="470" r="50" fill="#0a2a1b"/>
      <rect x="846" y="460" width="68" height="20" rx="10" fill="#11422f"/>`;
  } else if (index % 3 === 1) {
    const widths = [360, 290, 420, 230, 330];
    const bars = widths
      .map(
        (w, i) =>
          `<rect x="560" y="${330 + i * 54}" width="${w}" height="18" rx="9" fill="${
            i % 2 === 0 ? "#154d37" : accent
          }"/>`
      )
      .join("");
    layout = `
      <circle cx="340" cy="440" r="128" fill="none" stroke="#195c3b" stroke-width="18"/>
      <circle cx="340" cy="440" r="128" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" stroke-dasharray="563 804" transform="rotate(-90 340 440)"/>
      <circle cx="340" cy="440" r="88" fill="none" stroke="#154d37" stroke-width="14"/>
      <circle cx="340" cy="440" r="48" fill="none" stroke="#0a2a1b" stroke-width="12"/>
      <circle cx="340" cy="440" r="14" fill="${accent}"/>
      ${bars}`;
  } else {
    const columns = [200, 500, 800];
    const headers = [ACCENTS[0], ACCENTS[1], "#195c3b"];
    let board = "";
    columns.forEach((x, c) => {
      board += `<rect x="${x}" y="248" width="250" height="362" rx="16" fill="#0a2a1b"/>`;
      board += `<rect x="${x + 26}" y="274" width="92" height="12" rx="6" fill="${headers[c]}"/>`;
      [318, 392, 466].forEach((y, r) => {
        const flagged = c === 2 && r === 1;
        board += `<rect x="${x + 26}" y="${y}" width="198" height="58" rx="12" fill="#154d37"${
          flagged ? ` stroke="${accent}" stroke-width="3"` : ""
        }/>`;
        board += `<rect x="${x + 42}" y="${y + 16}" width="120" height="10" rx="5" fill="#195c3b"/>`;
        board += `<rect x="${x + 42}" y="${y + 34}" width="80" height="8" rx="4" fill="#11422f"/>`;
      });
    });
    layout = board;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <path id="leaf" d="M0 0 Q 20 -15 40 0 Q 20 15 0 0 Z"/>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0e3b2a"/>
      <stop offset="1" stop-color="#08291c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <circle cx="600" cy="300" r="380" fill="#1d5c36" opacity="0.18"/>
  ${leaf(-14, 64, 26, 3.4, "#041b12")}
  ${leaf(44, 36, 58, 2.7, "#062215")}
  ${leaf(1214, 742, 206, 3.4, "#041b12")}
  ${leaf(1156, 764, 238, 2.7, "#062215")}
  ${chrome}
  ${layout}
</svg>`;
}

function siteArt(index) {
  const accent = ACCENTS[index % ACCENTS.length];
  const chrome = `
    <rect x="90" y="76" width="1020" height="520" rx="22" fill="#072418" stroke="#195c3b" stroke-width="2"/>
    <rect x="90" y="76" width="1020" height="52" rx="22" fill="#0d3626"/>
    <rect x="90" y="102" width="1020" height="26" fill="#0d3626"/>
    <circle cx="132" cy="102" r="8" fill="${GOLD}"/>
    <circle cx="160" cy="102" r="8" fill="#4da066"/>
    <circle cx="188" cy="102" r="8" fill="#165633"/>
    <rect x="232" y="90" width="380" height="24" rx="12" fill="#11422f"/>
    <rect x="248" y="97" width="150" height="10" rx="5" fill="#195c3b"/>`;

  let layout = "";

  if (index % 4 === 0) {
    layout = `
      <rect x="330" y="196" width="540" height="18" rx="9" fill="#87d898"/>
      <rect x="400" y="248" width="400" height="14" rx="7" fill="#195c3b"/>
      <rect x="470" y="304" width="120" height="36" rx="18" fill="${accent}"/>
      <rect x="610" y="304" width="120" height="36" rx="18" fill="none" stroke="${accent}" stroke-width="3"/>
      ${[180, 460, 740]
        .map(
          (x) => `
      <rect x="${x}" y="420" width="280" height="126" rx="16" fill="#0a2a1b"/>
      <rect x="${x + 20}" y="442" width="140" height="12" rx="6" fill="#195c3b"/>
      <rect x="${x + 20}" y="466" width="220" height="10" rx="5" fill="#11422f"/>
      <rect x="${x + 20}" y="486" width="180" height="10" rx="5" fill="#11422f"/>`
        )
        .join("")}`;
  } else if (index % 4 === 1) {
    layout = `
      <rect x="150" y="216" width="360" height="18" rx="9" fill="#87d898"/>
      <rect x="150" y="264" width="280" height="18" rx="9" fill="#195c3b"/>
      <rect x="150" y="326" width="400" height="10" rx="5" fill="#11422f"/>
      <rect x="150" y="356" width="340" height="10" rx="5" fill="#11422f"/>
      <rect x="150" y="412" width="170" height="40" rx="20" fill="${accent}"/>
      <rect x="610" y="196" width="350" height="290" rx="20" fill="#0a2a1b"/>
      <circle cx="785" cy="341" r="62" fill="#11422f" stroke="${accent}" stroke-width="3"/>
      <circle cx="785" cy="341" r="24" fill="#0a2a1b"/>`;
  } else if (index % 4 === 2) {
    const cards = [150, 470, 790]
      .map(
        (x, i) => `
      <rect x="${x}" y="252" width="270" height="248" rx="18" fill="#0a2a1b"${
          i === 1 ? ` stroke="${accent}" stroke-width="3"` : ""
        }/>
      <rect x="${x + 20}" y="272" width="230" height="112" rx="12" fill="#11422f"/>
      <rect x="${x + 20}" y="404" width="160" height="12" rx="6" fill="#195c3b"/>
      <rect x="${x + 20}" y="440" width="90" height="14" rx="7" fill="${accent}" opacity="${
          [0.9, 0.7, 0.45][i]
        }"/>`
      )
      .join("");
    layout = `
      <rect x="150" y="186" width="300" height="18" rx="9" fill="#87d898"/>
      ${cards}`;
  } else {
    let cells = "";
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        const active = (row * 5 + col) % 6 === 2;
        cells += `<rect x="${174 + col * 76}" y="${292 + row * 58}" width="60" height="40" rx="10" fill="${
          active ? accent : "#11422f"
        }"/>`;
      }
    }
    layout = `
      <rect x="150" y="186" width="280" height="18" rx="9" fill="#87d898"/>
      <rect x="150" y="252" width="420" height="300" rx="18" fill="#0a2a1b"/>
      ${cells}
      <rect x="630" y="252" width="330" height="300" rx="18" fill="#0a2a1b"/>
      <rect x="660" y="288" width="270" height="44" rx="12" fill="#11422f"/>
      <rect x="660" y="348" width="270" height="44" rx="12" fill="#11422f"/>
      <rect x="660" y="408" width="270" height="44" rx="12" fill="#11422f" stroke="${accent}" stroke-width="3"/>
      <rect x="660" y="468" width="180" height="44" rx="22" fill="${accent}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="672" viewBox="0 0 1200 672">
  <defs>
    <path id="leaf" d="M0 0 Q 20 -15 40 0 Q 20 15 0 0 Z"/>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#134e35"/>
      <stop offset="1" stop-color="#0e3b2a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="672" fill="url(#bg)"/>
  <circle cx="600" cy="260" r="320" fill="#1d5c36" opacity="0.18"/>
  ${leaf(-10, 54, 24, 3, "#041b12")}
  ${leaf(36, 30, 52, 2.4, "#062215")}
  ${leaf(1210, 628, 210, 3, "#041b12")}
  ${leaf(1160, 644, 236, 2.4, "#062215")}
  ${chrome}
  ${layout}
</svg>`;
}

console.log("Generating placeholder art...\n");

const frameDir = join(root, "public", "frame");
const top = await readFile(join(frameSrc, "top.svg"));
const bottom = await readFile(join(frameSrc, "bottom.svg"));
const left = await readFile(join(frameSrc, "left.svg"));

await save(await renderBuffer(top, 1600), join(frameDir, "top.webp"));
await save(await renderBuffer(left, 240), join(frameDir, "left.webp"));
await save(await renderBuffer(left, 240, { flop: true }), join(frameDir, "right.webp"));
await save(await renderBuffer(bottom, 1600), join(frameDir, "bottom.webp"));

const productNames = ["livecheck", "moodshift", "taskmax"];
for (let i = 0; i < productNames.length; i++) {
  const file = join(root, "public", "products", `${productNames[i]}.webp`);
  await save(await renderBuffer(productArt(i), 1200), file);
}

for (let i = 0; i < 4; i++) {
  const file = join(root, "public", "sites", `site-${i + 1}.webp`);
  await save(await renderBuffer(siteArt(i), 1200), file);
}

console.log("\nDone. Placeholder art generated in public/.");
