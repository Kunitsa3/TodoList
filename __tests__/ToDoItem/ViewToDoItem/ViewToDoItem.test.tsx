import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import ViewToDoItem from 'components/ToDoItem/ViewToDoItem';

test('call function on edit button click', async () => {
  const user = userEvent.setup();
  const mockChangeEditState = jest.fn();
  const { result } = renderHook(() => useState([{
    date: new Date('2022-04-14T19:58:56.680Z'),
    id: 'b9cbe631-cc8b-4036-abf4-99cb9a3d2b96',
    isChecked: false,
    task: 'Call someone',
  }, {
    date: new Date('2022-04-14T13:13:36.993Z'),
    id: '32c777ad-f2a9-4412-a23e-8da1bd87d43f',
    isChecked: false,
    task: 'Write someone',
  }]));
  render(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={mockChangeEditState}
    taskInformation={{
      date: new Date('2022-04-14T13:13:36.993Z'),
      id: '32c777ad-f2a9-4412-a23e-8da1bd87d43f',
      isChecked: false,
      task: 'Write someone',
    }}
  />);
  const editIcon = screen.getByTestId('EditIcon');
  await user.click(editIcon);
  expect(mockChangeEditState).toBeCalled();
});

test('call function on delete button click', async () => {
  const user = userEvent.setup();
  const { result } = renderHook(() => useState([{
    date: new Date('2022-04-14T19:58:56.680Z'),
    id: 'b9cbe631-cc8b-4036-abf4-99cb9a3d2b96',
    isChecked: false,
    task: 'Call someone',
  }, {
    date: new Date('2022-04-14T13:13:36.993Z'),
    id: '32c777ad-f2a9-4412-a23e-8da1bd87d43f',
    isChecked: false,
    task: 'Write someone',
  }]));
  render(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={() => {}}
    taskInformation={{
      date: new Date('2022-04-14T13:13:36.993Z'),
      id: '32c777ad-f2a9-4412-a23e-8da1bd87d43f',
      isChecked: false,
      task: 'Write someone',
    }}
  />);
  const closeIcon = screen.getByTestId('CloseIcon');
  await user.click(closeIcon);
  expect(result.current[0]).toHaveLength(1);
});

test('call function on check task', async () => {
  const user = userEvent.setup();
  const { result } = renderHook(() => useState([{
    date: new Date('2022-04-14T19:58:56.680Z'),
    id: 'b9cbe631-cc8b-4036-abf4-99cb9a3d2b96',
    isChecked: false,
    task: 'Call someone',
  }, {
    date: new Date('2022-04-14T13:13:36.993Z'),
    id: '32c777ad-f2a9-4412-a23e-8da1bd87d43f',
    isChecked: false,
    task: 'Write someone',
  }]));
  const { rerender } = render(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={() => {}}
    taskInformation={result.current[0][1]}
  />);
  const checkBox = screen.getByTestId('CheckBoxOutlineBlankIcon');
  await user.click(checkBox);
  rerender(<ViewToDoItem
    setTasksList={result.current[1]}
    changeEditState={() => {}}
    taskInformation={result.current[0][1]}
  />);
  expect(result.current[0][1].isChecked).toBe(true);
  expect(screen.getByRole('checkbox')).toBeChecked();
});
