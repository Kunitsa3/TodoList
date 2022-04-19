/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';

import EditToDoItem from 'components/ToDoItem/EditToDoItem';
import { testTasksList } from '../../testHelpers';

test('renders a filled input', () => {
  render(<EditToDoItem
    setTasksList={() => {}}
    task="Task"
    changeEditState={() => {}}
    id="1"
  />);

  const input = screen.getByTestId('edit-task-input');
  expect(input).toHaveValue('Task');
});

test('call functions on save button click', async () => {
  const mockChangeEditState = jest.fn();
  const user = userEvent.setup();
  const { result } = renderHook(() => useState(testTasksList));

  render(<EditToDoItem
    setTasksList={result.current[1]}
    changeEditState={mockChangeEditState}
    task="Write someone"
    id="32c777ad-f2a9-4412-a23e-8da1bd87d43f"
  />);

  const button = screen.getByText('Save');
  const input = screen.getByTestId('edit-task-input');
  await user.clear(input);
  await user.type(input, 'Write a message');
  await user.click(button);
  expect(mockChangeEditState).toBeCalled();
  expect(result.current[0][1].task).toBe('Write a message');
});

test('call a function on cancel button click', async () => {
  const mockChangeEditState = jest.fn();
  const user = userEvent.setup();

  render(<EditToDoItem
    changeEditState={mockChangeEditState}
    setTasksList={() => {}}
    task="Task"
    id="1"
  />);

  const button = screen.getByText('Cancel');
  await user.click(button);
  expect(mockChangeEditState).toBeCalled();
});
