/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToDoItem from 'components/ToDoItem';

test('render ViewToDoItem depends on edit mode', async () => {
  const user = userEvent.setup();
  const ToDoItemComponent = (
    <ToDoItem
      setTasksList={() => {}}
      taskInformation={{
        date: new Date('2022-04-14T19:58:56.680Z'),
        id: 'b9cbe631-cc8b-4036-abf4-99cb9a3d2b96',
        isChecked: false,
        task: 'Call someone',
      }}
    />
  );
  const { rerender } = render(ToDoItemComponent);

  const editIcon = screen.getByTestId('EditIcon');
  expect(editIcon).toBeInTheDocument();
  await user.click(editIcon);

  rerender(ToDoItemComponent);

  const input = screen.getByTestId('edit-task-input');
  expect(input).toBeInTheDocument();
});
