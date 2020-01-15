const path = require("path");
var readline = require("readline");
const sveltePreprocess = require("svelte-preprocess");

module.exports = async ({ config }) => {
  config.resolve.mainFields = ["svelte", "module", "browser", "main"];
  const svelteConfig = config.module.rules.find(r =>
    /svelte\-loader/.test(r.loader)
  );

  svelteConfig.options = {
    preprocess: sveltePreprocess({
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

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });

  config.plugins.forEach(element => {
    // override progress plugin handler
    if (element.constructor.name === "ProgressPlugin") {
      element.handler = percentage => {
        const progress = parseInt(percentage * 100);

        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`webpack in progress ... ${progress}%`);

        if (progress === 100) {
          process.stdout.write("\n");
        }
      };
    }
  });

  return config;
};
