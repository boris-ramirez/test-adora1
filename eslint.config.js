module.exports = [
  {
    files: ["**/*.js"],
    env: {
      browser: true, // Para que ESLint reconozca las variables globales del navegador como window, document, etc.
      es2021: true, // O el estándar ECMAScript que estés utilizando
    },
    rules: {
      "no-console": "off", // Ejemplo de regla personalizada
      quotes: ["error", "single"], // Ejemplo de regla para comillas simples
      semi: ["error", "always"], // Ejemplo de regla para punto y coma obligatorio
    },
    globals: {
      window: "readonly", // Añadir aquí otras variables globales que necesites
      document: "readonly",
    },
  },
];
