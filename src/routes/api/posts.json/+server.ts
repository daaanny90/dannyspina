import { json } from "@sveltejs/kit";
import { sortedPosts } from "$lib/helpers/utils";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const GET = async () => {
  const metaFiles = import.meta.glob("/src/routes/blog/**/*.md");
  const rawFiles = import.meta.glob("/src/routes/blog/**/*.md", {
    query: "?raw",
    import: "default",
  });

  const allPosts = await Promise.all(
    Object.entries(metaFiles).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const raw = (await rawFiles[path]()) as string;
      const words = raw
        .replace(/^---[\s\S]*?---/, "") // frontmatter
        .replace(/<script[\s\S]*?<\/script>/g, "") // component imports
        .replace(/<[^>]+>/g, " ") // inline html/components
        .replace(/[#>*`_[\]()!]/g, " ") // markdown punctuation
        .split(/\s+/)
        .filter(Boolean).length;
      const readingMinutes = Math.max(1, Math.round(words / 200));
      const postPath = path.slice(11, -9);

      return { meta: metadata, path: postPath, latest: false, readingMinutes };
    }),
  );

  const sorted = sortedPosts(allPosts); // newest first
  const total = sorted.length;
  // stable "LOG·NNN" numbering: the oldest entry is 1, counting up
  sorted.forEach((post, i) => {
    post.log = total - i;
  });
  sorted[0].latest = true;

  return json(sorted);
};
