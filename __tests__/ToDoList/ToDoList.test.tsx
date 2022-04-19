/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';

import ToDoList from 'components/ToDoList';
import { testTasksList } from '../testHelpers';

test('render tasks in the right order', () => {
  render(<ToDoList
    setTasksList={() => {}}
    tasksList={testTasksList}
  />);

  const taskDates = screen.getAllByTestId('item-date');
  expect(taskDates[0]).toHaveTextContent('14-04-2022 22:58:56');
  expect(taskDates[1]).toHaveTextContent('14-04-2022 16:13:36');
});
