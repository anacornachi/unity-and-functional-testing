import {fireEvent, render, screen} from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
  render(<SummaryForm />);

  const checkboxTerms = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });

  expect(checkboxTerms).not.toBeChecked();

  const confirmOrderButton = screen.getByRole('button', {
    name: 'Confirm order',
  });

  expect(confirmOrderButton).toBeDisabled();
});

test('checkbox enable and disable button when clicked', () => {
  render(<SummaryForm />);

  const checkboxTerms = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  const confirmOrderButton = screen.getByRole('button', {
    name: 'Confirm order',
  });

  fireEvent.click(checkboxTerms);

  expect(checkboxTerms).toBeChecked();
  expect(confirmOrderButton).toBeEnabled();

  fireEvent.click(checkboxTerms);

  expect(checkboxTerms).not.toBeChecked();
  expect(confirmOrderButton).toBeDisabled();
});
