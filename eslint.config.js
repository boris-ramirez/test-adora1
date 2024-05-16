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
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "document",
          property: "getEleme",
          message: "Did you mean `getElementById`?",
        },
      ],
    },
  },
];
