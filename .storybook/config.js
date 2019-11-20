import { configure } from "@storybook/svelte";
import { addParameters } from "@storybook/svelte";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: themes.light
  }
});

configure(
  require.context("../src/shared_components", true, /\.stories\.js$/),
  module
);
