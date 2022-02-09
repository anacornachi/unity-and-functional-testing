import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

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

  userEvent.click(checkboxTerms);

  expect(confirmOrderButton).toBeEnabled();

  userEvent.click(checkboxTerms);

  expect(confirmOrderButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);

  // popover start out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover apperars upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out

  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
