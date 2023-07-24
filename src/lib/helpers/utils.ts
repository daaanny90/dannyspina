import type { Post } from "./types";

/**
 * Returns the height of an element, margin and padding included.
 *
 * @param elSelector The target element
 * @returns the height of the element, marign and padding included.
 */
export const outerHeight = (elSelector: string) => {
  const elm = document.querySelector(elSelector);

  const elmHeight = parseInt(
    document.defaultView.getComputedStyle(elm, "").getPropertyValue("height")
  );
  const elmMargin =
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("margin-top")
    ) +
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("margin-bottom")
    );
  const elmPadding =
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("padding-top")
    ) +
    parseInt(
      document.defaultView
        .getComputedStyle(elm, "")
        .getPropertyValue("padding-bottom")
    );
  return elmHeight + elmMargin + elmPadding;
};

/**
 * Sort the blog posts based on descending date
 * (from most recent to older)
 *
 * @param posts The list of blog posts
 * @returns The array of blog posts sorted by descending date
 */
export const sortedPosts = (posts: Post[]) => {
  return posts.sort(
    (a, b) => (new Date(b.meta.date) as any) - (new Date(a.meta.date) as any)
  );
};

export const groupPostsByCategory = (posts: Post[]): {
  [category: string]: Post[];
} => {
  const groupedPosts: { [category: string]: Post[] } = {};

  posts.forEach((post) => {
    post.meta.categories.forEach((category) => {
      if (!groupedPosts[category]) {
        groupedPosts[category] = [];
      }
      groupedPosts[category].push(post);
    });
  });

  return groupedPosts;
}