import { storiesOf } from "@storybook/svelte";
import { action } from "@storybook/addon-actions";

import Button from "../src/button";
import TopBar from "../src/shared_components/topBar";
import TopBarView from "./components/topBarView.svelte";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import "./styles.css";

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

import topBarViewNotes from "./components/topBarView.md";
import topBarViewWithMenu from "./components/topBarViewWithMenu.md";

stories
  .add(
    "TopBar",
    () => ({
      Component: TopBar,
      props: {
        title: text("Title", "Top Bar Component")
      }
    }),
    { notes: { markdown: topBarViewNotes } }
  )
  .add(
    "Top Bar with menu",
    () => ({
      Component: TopBarView,
      props: {
        title: text("Title", "Top Bar Component")
      }
    }),
    { notes: { markdown: topBarViewWithMenu } }
  );
