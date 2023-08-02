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
  channel.ele("title").txt("Danny Spina");
  channel
    .ele("description")
    .txt(
      "Danny's blog about coding, books, design, and some personal thoughts."
    );
  channel.ele("link").txt("https://dannyspina.com");
  channel.ele("language").txt("en");
  posts.forEach((post) => {
    const item = channel.ele("item");
    item.ele("title").txt(post.meta.title);
    item.ele("description").txt(post.meta.subtitle);
    item.ele("link").txt(`https://dannyspina.com/posts${post.path}`);
    item.ele("guid").txt(`https://dannyspina.com/posts${post.path}`);
    item.ele("pubDate").txt(new Date(post.meta.date).toUTCString());
  });

  const xml = feed.end({ prettyPrint: true });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
