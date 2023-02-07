// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const get = async () => {
  const allBooks = import.meta.glob('../books/*.md')
  const iterableBooks = Object.entries(allBooks)

  const books = await Promise.all(
    iterableBooks.map(async ([path, resolver]) => {
      const metadata = await resolver()
      const bookPath = path.slice(2, -3)

      return {
        meta: metadata,
        path: bookPath
      }
    })
  )

  return {body: books}
}