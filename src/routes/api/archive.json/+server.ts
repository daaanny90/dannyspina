import { json } from "@sveltejs/kit";
import { sortedPosts } from "$lib/helpers/utils";
import type { Post } from "$lib/helpers/types";

export const GET = async () => {
  const metaFiles = import.meta.glob("/src/routes/archive/**/*.md");

  const entries = await Promise.all(
    Object.entries(metaFiles).map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as { metadata: Post["meta"] };
      // "/src/routes" is 11 chars, "/+page.md" is 9
      return { meta: metadata, path: path.slice(11, -9), latest: false };
    }),
  );

  return json(sortedPosts(entries)); // newest first
};
