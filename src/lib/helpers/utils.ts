import type { Post } from "./types";

/**
 * Sort the blog posts based on descending date
 * (from most recent to older)
 *
 * @param posts The list of blog posts
 * @returns The array of blog posts sorted by descending date
 */
export const sortedPosts = (posts: Post[]) => {
  return posts.sort(
    (a, b) => (new Date(b.meta.date) as any) - (new Date(a.meta.date) as any),
  );
};
