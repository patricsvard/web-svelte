import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import TopBar from "./topBar.svelte";
import Notes from "./topBar.md";

export default {
  title: "TopBar"
};

export const basic = () => ({
  Component: TopBar,
  props: { title: text("title", "Top bar component") }
});
basic.story = {
  parameters: { notes: { markdown: Notes } },
  decorators: [withKnobs]
};

export const advanced = () => ({
  Component: TopBar,
  props: { title: text("title", "Top bar component") }
});
advanced.story = {
  parameters: { notes: { markdown: Notes } },
  decorators: [withKnobs]
};
