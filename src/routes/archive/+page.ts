export const load = async ({ fetch }) => {
  const res = await fetch("/api/archive.json");
  const entries = await res.json();

  return { entries };
};
