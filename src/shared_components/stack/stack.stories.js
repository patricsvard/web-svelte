import Stack from "./stack.svelte";
import Notes from "./stack.md";

export default {
  title: "Stack"
};

export const basic = () => ({ Component: Stack });
basic.story = { parameters: { notes: { markdown: Notes } } };

export const advanced = () => ({ Component: Stack });
advanced.story = { parameters: { notes: { markdown: Notes } } };
