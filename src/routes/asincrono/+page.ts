export const load = async ({ fetch }) => {
  const episodes = await fetch("/api/episodes.json");
  const allEpisodes = await episodes.json();

  return {
    episodes: allEpisodes,
  };
};