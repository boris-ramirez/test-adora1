const globals = require("globals");
module.exports = [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        window: true,
      },
    },
  },
];
