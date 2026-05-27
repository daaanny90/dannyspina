module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    // "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.cjs"],
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
 },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
