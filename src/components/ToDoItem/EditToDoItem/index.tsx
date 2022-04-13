import React, { FC } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { TaskInformation } from 'types';
import { createTaskInformation } from 'helpers';

interface EditToDoItemProps {
  editTask: string;
  setEditTask: React.Dispatch<React.SetStateAction<string>>;
  setTasksList: React.Dispatch<React.SetStateAction<TaskInformation[]>>;
  changeEditState: () => void;
  id: number;
}

const EditToDoItem: FC<EditToDoItemProps> = ({ editTask, setEditTask, setTasksList, changeEditState, id }) => {
  const onEditTaskChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({ target: { value } }) => {
    setEditTask(value);
  };

  const onSaveButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTasksList(oldTasksList =>
      oldTasksList.map(
        task =>
          (task.id === id ? createTaskInformation(editTask) : task),
      ));
    changeEditState();
  };

  return (
    <Box>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        value={editTask}
        onChange={onEditTaskChange}
      />
      <Button type="button" onClick={onSaveButtonClick}>
        Save
      </Button>
      <Button type="button" onClick={changeEditState}>
        Delete
      </Button>
    </Box>
  );
};

export default EditToDoItem;
