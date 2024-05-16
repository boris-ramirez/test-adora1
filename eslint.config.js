module.exports = [
  {
    ignores: ["eslint.config.js"], // Ignorar el archivo de configuración
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error", // Variables no utilizadas
      "no-undef": "error", // Variables indefinidas
      "no-console": "off", // Permitir console.log
      quotes: ["error", "single"], // Comillas simples
      semi: ["error", "always"], // Punto y coma obligatorio
      "no-extra-semi": "error", // Punto y coma extra
      curly: "error", // Uso de llaves en declaraciones
      eqeqeq: ["error", "always"], // Comparación estricta
    },
  },
];
