import React, { FC } from 'react';
import { Button } from '@mui/material';

import { TaskInformation } from 'types';
import { createTaskInformation } from 'helpers';
import { EditButtonsWrapper, EditTaskFieldWrapper, EditTaskInput } from './styled';

interface EditToDoItemProps {
  editTask: string;
  setEditTask: React.Dispatch<React.SetStateAction<string>>;
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  changeEditState: () => void;
  id: string;
}

const EditToDoItem: FC<EditToDoItemProps> = ({ editTask, setEditTask, setTasksList, changeEditState, id }) => {
  const onEditTaskChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
   ({ target: { value } }) => {
     setEditTask(value);
   };

  const onSaveButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTasksList(oldTasksList =>
      oldTasksList.map(
        task =>
          (task.id === id ? createTaskInformation(editTask, id) : task),
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
