import { configs as jsConfigs } from "@eslint/js";
import globals from "globals";

export default [
  jsConfigs.recommended,
  {
    files: ["**/*.js"], // Asegúrate de que esta línea esté incluyendo todos los archivos .js
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
