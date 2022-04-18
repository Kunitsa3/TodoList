import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewTaskField from '../../src/components/NewTaskField';

test('renders an input with a label "Add new task"', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<NewTaskField setTasksList={() => {}} />);
  const input = screen.getByLabelText(/add new task/i);
  expect(input).toHaveAttribute('type', 'text');
});

test('renders plus with an filled input', async () => {
  const user = userEvent.setup();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<NewTaskField setTasksList={() => {}} />);
  const input = screen.getByLabelText(/add new task/i);
  await user.type(input, 'Pes');
  const plusIcon = screen.getByTestId('AddIcon');
  expect(plusIcon).toBeVisible();
});

test('call function and clear field on plus click', async () => {
  const mockSetTasksList = jest.fn();
  const user = userEvent.setup();
  render(<NewTaskField setTasksList={mockSetTasksList} />);
  const plusIcon = screen.getByTestId('AddIcon');
  const input = screen.getByLabelText(/add new task/i);
  await user.click(plusIcon);
  expect(input).toHaveValue('');
  expect(mockSetTasksList).toBeCalled();
});
