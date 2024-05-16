module.exports = [
  js.configs.recommended, // Usar la configuración recomendada por ESLint
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser, // Importa variables globales del navegador
        myCustomGlobal: "readonly", // Tu variable global personalizada
      },
    },
    rules: {
      "no-console": "off", // Ejemplo de regla personalizada
      quotes: ["error", "single"], // Ejemplo de regla para comillas simples
      semi: ["error", "always"], // Ejemplo de regla para punto y coma obligatorio
    },
    ignores: ["**/temp.js", "config/*"], // Ignorar archivos y directorios específicos
  },
  {
    files: ["tests/**"],
    languageOptions: {
      globals: {
        ...globals.mocha, // Variables globales para Mocha
      },
    },
  },
];
