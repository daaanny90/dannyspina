/* Generates build/sitemap.xml from the prerendered output.
   Replaces svelte-sitemap, whose glob chain (fast-glob → micromatch →
   braces) carries unpatched advisories; all that is needed here is a
   flat walk of the .html files. Excludes the same sections the old
   svelte-sitemap flags did: noindex sections and shortlink redirects. */
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://dannyspina.com";
const BUILD = path.join(__dirname, "..", "build");
const EXCLUDED = ["archive", "books", "library", "meet"];

const isExcluded = (p) =>
  EXCLUDED.some((e) => p === `${e}.html` || p.startsWith(`${e}/`));

const urls = fs
  .readdirSync(BUILD, { recursive: true })
  .map((p) => p.split(path.sep).join("/"))
  .filter((p) => p.endsWith(".html") && !isExcluded(p))
  .map((p) => p.replace(/\.html$/, ""))
  .map((route) =>
    route === "index" ? DOMAIN : `${DOMAIN}/${route.replace(/\/index$/, "")}`,
  )
  .sort();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(path.join(BUILD, "sitemap.xml"), xml);
console.log(`sitemap.xml — ${urls.length} urls`);
