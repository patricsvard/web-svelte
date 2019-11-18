const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "jest-transform-svelte",
      { preprocess: sveltePreprocess() }
    ],
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|md)$":
      "jest-transform-stub"
  },
  moduleFileExtensions: ["js", "svelte", "json"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["./.jest/register-context.js"]
};
