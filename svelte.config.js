import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "url";
import path from "path";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import 'src/lib/styles/variables.scss';`,
      },
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: path.join(dirname, "src/routes/blog/post.svelte"),
        books: path.join(dirname, "src/routes/books/book.svelte"),
        // fallback for markdown outside those folders (the weekly archive)
        _: path.join(dirname, "src/lib/layouts/Doc.svelte"),
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      handleUnseenRoutes: "warn",
    },
  },
};

export default config;
