import { configure } from "@storybook/svelte";
import { addParameters } from "@storybook/svelte";
import { themes } from "@storybook/theming";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addParameters({
  options: {
    theme: themes.dark
  },
  viewport: { viewports: newViewports }
});
