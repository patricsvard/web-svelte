import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import TopBar from "./topBar.svelte";
import initStoryshots from "@storybook/addon-storyshots";

initStoryshots();

test("Stack component", () => {
  const { component, getByText } = render(TopBar, {
    props: { title: "Orange" }
  });
  expect(getByText("Orange")).toBeInTheDocument();
  expect(component).toMatchSnapshot();
});
