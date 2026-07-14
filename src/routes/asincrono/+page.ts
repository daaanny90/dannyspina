export const load = async ({ fetch }) => {
  try {
    const res = await fetch("/api/episodes.json");
    if (!res.ok) return { episodes: [] };
    const allEpisodes = await res.json();
    return { episodes: Array.isArray(allEpisodes) ? allEpisodes : [] };
  } catch {
    return { episodes: [] };
  }
};
