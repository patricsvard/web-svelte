import { configure } from "@storybook/svelte";
import { addParameters } from "@storybook/svelte";
import { themes } from "@storybook/theming";

configure(
  require.context("../src/shared_components", true, /\.stories\.js$/),
  module
);

addParameters({
  options: {
    theme: themes.dark
  },
  viewport: { viewports: newViewports }
});
