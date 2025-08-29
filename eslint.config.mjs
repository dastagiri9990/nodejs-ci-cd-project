// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,   // ✅ Add Jest globals here
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
