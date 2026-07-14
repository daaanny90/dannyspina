module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    // "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.cjs", "build", ".svelte-kit"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
    },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    // compiler warnings (a11y, unused selectors/exports) stay visible in dev
    // but must not fail CI builds for legacy components
    "svelte/valid-compile": ["error", { ignoreWarnings: true }],
    // {@html} is only used with self-authored, static content
    "svelte/no-at-html-tags": "warn",
    "svelte/no-inner-declarations": "warn",
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
