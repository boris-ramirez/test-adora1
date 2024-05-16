module.exports = {
  overrides: [
    {
      files: ["**/*.js"],
      env: {
        es6: true,
      },
      globals: {
        window: true,
      },
      rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
      },
    },
  ],
};
