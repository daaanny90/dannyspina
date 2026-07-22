import type { Post } from "$lib/helpers/types.js";
import { create } from "xmlbuilder2";
import { SITE_URL, absoluteUrl } from "$lib/siteConfig";

export const prerender = true;

export const GET = async ({ fetch }) => {
  const response = await fetch(`/api/posts.json`);
  if (!response.ok) {
    return new Response("", { status: 500 });
  }
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
    .att("href", absoluteUrl("/rss.xml"))
    .att("rel", "self")
    .att("type", "application/rss+xml");
  channel.ele("title").txt("Danny Spina");
  channel
    .ele("description")
    .txt(
      "Danny's blog about coding, books, design, and some personal thoughts.",
    );
  channel.ele("link").txt(SITE_URL);
  channel.ele("language").txt("en");
  posts.forEach((post) => {
    // post.path is already the public route ("/blog/<slug>")
    const url = absoluteUrl(post.path);
    const item = channel.ele("item");
    item.ele("title").txt(post.meta.title);
    item.ele("description").txt(post.meta.subtitle ?? "");
    item.ele("link").txt(url);
    item.ele("guid").txt(url);
    item.ele("pubDate").txt(new Date(post.meta.date).toUTCString());
  });

  const xml = feed.end({ prettyPrint: true });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
