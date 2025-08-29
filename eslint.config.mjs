// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
