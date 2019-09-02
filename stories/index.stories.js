import { storiesOf } from "@storybook/svelte";
import { action } from "@storybook/addon-actions";

import Button from "../src/button.svelte";
import Foo from "../src/foo.svelte";
import TopBar from "../src/topBar.svelte";

storiesOf("Button", module)
  .add("with text", () => ({
    Component: Button,
    props: { text: "Hello Button" },
    on: { click: action("clicked") }
  }))
  .add("with some emoji", () => ({
    Component: Button,
    props: {
      text: "😀 😎 👍 💯"
    },
    on: { click: action("clicked") }
  }));

storiesOf("Foo", module).add("foo", () => ({
  Component: Foo,
  options: { panelPosition: "right" }
}));

storiesOf("TopBar", module).add("TopBar", () => ({
  Component: TopBar
}));
