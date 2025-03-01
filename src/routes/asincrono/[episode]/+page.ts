export const load = async ({ params, fetch }) => {
  try {
    const response = await fetch("/api/episodes.json");
    const episodes = await response.json();

    return {
      episodes
    };
  } catch (e) {
    console.error('error fetching episodes', e);
  }
};
