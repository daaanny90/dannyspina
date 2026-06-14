export const load = async ({ params, fetch }) => {
  try {
    const response = await fetch("/api/episodes.json");
    if (!response.ok) return { episodes: [] };
    const episodes = await response.json();
    return { episodes: Array.isArray(episodes) ? episodes : [] };
  } catch (e) {
    console.error('error fetching episodes', e);
    return { episodes: [] };
  }
};
