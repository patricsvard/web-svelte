import { storiesOf } from "@storybook/svelte";
import { action } from "@storybook/addon-actions";

import Button from "../src/button";
import TopBar from "../src/shared_components/topBar";
import TopBarView from "./components/topBarView";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

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

const stories = storiesOf("TopBar", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add("TopBar", () => ({
    Component: TopBar,
    props: {
      title: text("Title", "Top Bar Component")
    }
  }))
  .add("Top Bar with menu", () => ({
    Component: TopBarView,
    props: {
      title: text("Title", "Top Bar Component")
    }
  }));
