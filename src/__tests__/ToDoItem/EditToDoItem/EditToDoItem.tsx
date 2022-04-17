/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import EditToDoItem from 'components/ToDoItem/EditToDoItem';

test('renders filled input', () => {
  render(<EditToDoItem
    setTasksList={() => {}}
    editTask="Task"
    setEditTask={() => {}}
    changeEditState={() => {}}
    id="1"
  />);
  screen.debug();
  const input = screen.getByTestId('edit-task-input');
  expect(input).toHaveValue('Task');
});
