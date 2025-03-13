import fs from "fs";
export const load = async ({ fetch }) => {
  const posts = await fetch("/api/posts.json");
  const allPosts = await posts.json();
  const index = await fetch("/api/postsindex.json");
  const allIndex = await index.json();

  return {
    posts: allPosts,
    index: allIndex
  };
};
