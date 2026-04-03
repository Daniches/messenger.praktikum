import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error"
  }
  },
  tseslint.configs.recommended,
]);
