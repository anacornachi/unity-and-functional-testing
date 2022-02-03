import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct color and text", () => {
  render(<App />);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be "Change to red"

  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enbales on second click", () => {
  render(<App />);

  // expect checkbox is unchecked

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // click button -- first time

  fireEvent.click(checkbox);

  // expect checkbox is disabled

  expect(colorButton).toBeDisabled();

  // click button -- second time

  fireEvent.click(checkbox);

  // expect checkbox is enabled

  expect(colorButton).toBeEnabled();
});