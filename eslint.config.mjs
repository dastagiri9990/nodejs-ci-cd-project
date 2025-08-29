// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";
<<<<<<< HEAD

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
=======

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

>>>>>>> 65d492a (3rd commit)
