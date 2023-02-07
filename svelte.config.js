import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
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
        blog: "src/routes/blog/_post.svelte",
        books: "src/routes/books/_book.svelte",
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
