export const load = async ({ fetch }) => {
  const books = await fetch("/api/episodes.json");
  const allEpisodes = await books.json();

  return {
    episodes: allEpisodes,
  };
};