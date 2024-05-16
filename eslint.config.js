import { configs as jsConfigs } from "@eslint/js";
import globals from "globals";

export default [
  jsConfigs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly",
        module: "readonly", // Definir module como global
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
    ignores: ["**/temp.js", "config/*"],
  },
  {
    files: ["tests/**"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
