module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      globals: {
        window: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
