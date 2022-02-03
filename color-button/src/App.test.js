import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';
import React from 'react';

test('button has correct color and text', () => {
  render(<App />);

  // find an element with a role of button and text of "Change to MidnightBlue"
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  //  click button
  fireEvent.click(colorButton);

  //  expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  //  expect the button text to be "Change to MediumVioletRed"

  expect(colorButton.textContent).toBe('Change to MediumVioletRed');
});

test('initial conditions', () => {
  render(<App />);

  //  check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button first and after enbales', () => {
  render(<App />);

  // expect checkbox is unchecked

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  // click button -- first time

  fireEvent.click(checkbox);

  // expect checkbox is disabled

  expect(colorButton).toBeDisabled();

  // click button -- second time

  fireEvent.click(checkbox);

  // expect checkbox is enabled

  expect(colorButton).toBeEnabled();
});

test('button turns gray when disabled and return when enabled', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const buttonColor = screen.getByRole('button', {
    name: 'Change to MidnightBlue',
  });

  // initial behavior

  expect(checkbox).not.toBeChecked();
  expect(buttonColor).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  expect(buttonColor).toBeEnabled();

  // first flow

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(buttonColor).toBeDisabled();
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(buttonColor).toBeEnabled();
  expect(buttonColor).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  // second flow

  fireEvent.click(buttonColor);
  expect(buttonColor).toHaveStyle({backgroundColor: 'MidnightBlue'});

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(buttonColor).toBeDisabled();
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(buttonColor).toBeEnabled();
  expect(buttonColor).toHaveStyle({backgroundColor: 'MidnightBlue'});
});

// combine tests and describe statement.
// described statement is a way of grouping tests

describe('spaces before camel case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
