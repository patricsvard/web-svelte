const path = require("path");
const sveltePreprocess = require("svelte-preprocess");

module.exports = async ({ config }) => {
  config.resolve.mainFields = ["svelte", "module", "browser", "main"];
  const svelteConfig = config.module.rules.find(r =>
    /svelte\-loader/.test(r.loader)
  );

  svelteConfig.options = {
    preprocess: sveltePreprocess({
      onBefore({ content, filename }) {
        content = content.replace("../../scss", "../assets/scss");
        return content;
      },
      preserve: ["ld+json"],
      transformers: {
        scss: {
          includePaths: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../src")
          ]
        }
      }
    })
  };

  return config;
};
