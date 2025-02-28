import { DOMParser } from "xmldom";
import { json, error } from "@sveltejs/kit";

export const GET = async () => {
  try {
    const res = await fetch("https://anchor.fm/s/101cdbd18/podcast/rss");

    if (!res.ok) {
      throw new Error(`Errore HTTP: ${res.status}`);
    }

    const text = await res.text();

    function generateSlug(title, pubDate) {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "") // Rimuove caratteri speciali
        .replace(/\s+/g, "-") // Sostituisce spazi con trattini
        .concat("-", new Date(pubDate).getTime()); // Aggiunge timestamp per evitare duplicati
    }

    function parseRSS(rss) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(rss, "text/xml");

      const items = xmlDoc.getElementsByTagName("item");
      const episodes = [];

      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        const title = item.getElementsByTagName("title")[0]?.textContent || "";
        const link = item.getElementsByTagName("link")[0]?.textContent || "";
        const description = item.getElementsByTagName("description")[0]?.textContent || "";
        const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
        const enclosure = item.getElementsByTagName("enclosure")[0];

        const imageElement = item.getElementsByTagName("itunes:image")[0];
        const imageUrl = imageElement ? imageElement.getAttribute("href") : null;

        const audioUrl = enclosure ? enclosure.getAttribute("url") : null;

        // Usa il guid se esiste, altrimenti genera uno slug SEO-friendly
        const id = generateSlug(title, pubDate);

        episodes.push({ id, title, link, description, pubDate, audioUrl, imageUrl });
      }

      return episodes;
    }

    const episodes = parseRSS(text);
    return json(episodes);
  } catch (err) {
    console.error("Error fetching episodes:", err);
    throw error(500, "Impossibile recuperare il feed RSS");
  }
};
