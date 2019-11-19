import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Stack from "./stack.svelte";
import initStoryshots from "@storybook/addon-storyshots";

initStoryshots();

test("Stack component", () => {
  const { component, getByText } = render(Stack, {});
  expect(getByText("Top/Left")).toBeInTheDocument();
  expect(getByText("Bottom/Right")).toBeInTheDocument();
  expect(component).toMatchSnapshot();
});
