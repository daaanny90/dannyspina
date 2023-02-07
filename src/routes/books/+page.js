export const load = async ({ fetch }) => {
  const books = await fetch("/api/books.json");
  const allBooks = await books.json();

  return {
  books: allBooks,
};
};
