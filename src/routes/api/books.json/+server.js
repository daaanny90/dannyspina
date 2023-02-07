import { json } from '@sveltejs/kit';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const GET = async () => {
  const allBooks = import.meta.glob("/src/routes/books/**/*.md");
  const iterableBooks = Object.entries(allBooks);

  const books = await Promise.all(
    iterableBooks.map(async ([path, resolver]) => {
      const metadata = await resolver();
      const bookPath = path.slice(11, -9);

      return {
        meta: metadata,
        path: bookPath,
      };
    })
  );

  return json(books);
};
