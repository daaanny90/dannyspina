import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import autoprefixer from "autoprefixer";

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
        blog: "src/routes/blog/post.svelte",
        books: "src/routes/books/book.svelte",
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
