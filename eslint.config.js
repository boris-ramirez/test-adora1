const globals = require("globals");

module.exports = {
  overrides: [
    {
      files: ["**/*.js"],
      env: {
        es6: true,
      },
      globals: globals.browser,
      rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
      },
    },
  ],
};
