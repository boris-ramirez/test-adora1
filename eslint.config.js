import { configs as jsConfigs } from "@eslint/js";
import globals from "globals";

export default [
  jsConfigs.recommended, // Usar la configuración recomendada por ESLint
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly",
      },
    },
    rules: {
      "no-console": "off",
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
