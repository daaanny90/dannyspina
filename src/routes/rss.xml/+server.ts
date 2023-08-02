import type { Post } from "$lib/helpers/types.js";
import { create } from "xmlbuilder2";

export const prerender = true;

export const GET = async () => {
  const response = await fetch(`https://dannyspina.com/api/posts.json`);
  const posts: Post[] = await response.json();

  const feed = create({
    version: "1.0",
    encoding: "UTF-8",
  })
    .ele("rss")
    .att("version", "2.0")
    .att("xmlns:atom", "http://www.w3.org/2005/Atom");

  const channel = feed.ele("channel");
  channel
    .ele("atom:link")
    .att("href", `https://dannyspina.com/rss.xml`)
    .att("rel", "self")
    .att("type", "application/rss+xml");
  channel.ele("title").txt("Il tuo titolo del feed"); // Inserisci il titolo come testo invece che come elemento
  channel.ele("description").txt("Il tuo titolo del feed");
  channel.ele("link").txt("https://dannyspina.com");
  channel.ele("language").txt("en"); // Imposta la lingua del feed

  posts.forEach((post) => {
    const item = channel.ele("item");
    item.ele("title").txt(post.meta.title);
    item.ele("description").txt(post.meta.subtitle);
    item.ele("link").txt(`https://dannyspina.com/posts/${post.path}`); // Crea l'URL del post utilizzando l'URL corrente
    item.ele("guid").txt(`https://dannyspina.com/posts/${post.path}`);
    item.ele("pubDate").txt(new Date(post.meta.date).toUTCString());
  });

  const xml = feed.end({ prettyPrint: true });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
