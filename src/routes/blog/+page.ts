export const load = async ({ fetch }) => {
  const res = await fetch("/api/posts.json");
  const posts = await res.json();

  return { posts };
};
