import React, { FC, useState } from 'react';
import { Button } from '@mui/material';

import { TaskInformation } from 'types';
import { createTaskInformation } from 'helpers';
import { EditButtonsWrapper, EditTaskFieldWrapper, EditTaskInput } from './styled';

interface EditToDoItemProps {
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  changeEditState: () => void;
  id: string;
  task: string;
}

const EditToDoItem: FC<EditToDoItemProps> = ({ setTasksList, changeEditState, id, task }) => {
  const [editTask, setEditTask] = useState(task);

  const onEditTaskChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
   ({ target: { value } }) => {
     setEditTask(value);
   };

  const onSaveButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTasksList(oldTasksList =>
      oldTasksList.map(
        taskItem =>
          (taskItem.id === id ? createTaskInformation(editTask, id) : taskItem),
      ));
    changeEditState();
  };

  return (
    <EditTaskFieldWrapper>
      <EditTaskInput
        fullWidth
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        value={editTask}
        onChange={onEditTaskChange}
        inputProps={{
          'data-testid': 'edit-task-input',
        }}
      />
      <EditButtonsWrapper>
        <Button type="button" size="small" onClick={onSaveButtonClick}>
          Save
        </Button>
        <Button type="button" size="small" onClick={changeEditState}>
          Cancel
        </Button>
      </EditButtonsWrapper>
    </EditTaskFieldWrapper>
  );
};

export default EditToDoItem;
