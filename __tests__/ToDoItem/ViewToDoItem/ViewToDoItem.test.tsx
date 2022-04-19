/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import ViewToDoItem from 'components/ToDoItem/ViewToDoItem';

import { testTasksList } from '../../testHelpers';

test('call function on edit button click', async () => {
  const user = userEvent.setup();
  const mockChangeEditState = jest.fn();
  const { result } = renderHook(() => useState(testTasksList));

  render(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={mockChangeEditState}
    taskInformation={result.current[0][0]}
  />);

  const editIcon = screen.getByTestId('EditIcon');
  await user.click(editIcon);
  expect(mockChangeEditState).toBeCalled();
});

test('call function on delete button click', async () => {
  const user = userEvent.setup();
  const { result } = renderHook(() => useState(testTasksList));

  render(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={() => {}}
    taskInformation={result.current[0][0]}
  />);

  const closeIcon = screen.getByTestId('CloseIcon');
  await user.click(closeIcon);
  expect(result.current[0]).toHaveLength(1);
});

test('call function on check task', async () => {
  const user = userEvent.setup();
  const { result } = renderHook(() => useState(testTasksList));
  const ViewToDoItemComponent = (
    <ViewToDoItem
      setTasksList={result.current[1]}
      changeEditState={() => {}}
      taskInformation={result.current[0][1]}
    />
  );

  const { rerender } = render(ViewToDoItemComponent);

  const checkBox = screen.getByTestId('CheckBoxOutlineBlankIcon');
  await user.click(checkBox);

  rerender(ViewToDoItemComponent);

  expect(result.current[0][1].isChecked).toBe(true);
  expect(screen.getByRole('checkbox')).toBeChecked();
});
